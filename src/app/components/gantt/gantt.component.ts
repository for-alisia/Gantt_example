/** Angular */
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
/** Libraries */
import { gantt } from 'dhtmlx-gantt';
/** Services */
import { TaskService } from '../../services/task.service';
import { LinkService } from '../../services/link.service';
/** Models */
import { Task } from '../../models/Task';
import { Link } from '../../models/Link';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TaskService, LinkService]
})
export class GanttComponent implements OnInit, AfterViewInit {
  @ViewChild('gantt_here') ganttContainer: ElementRef;

  constructor(private taskService: TaskService, private linkService: LinkService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gantt.config.xml_date = '%Y-%m-%d %H:%i';
    /** Init gant */
    gantt.init(this.ganttContainer.nativeElement);
    /** Add logic to update tasks ans links */
    const dp = gantt.createDataProcessor({
      task: {
        update: (data: Task) => this.taskService.update(data),
        create: (data: Task) => this.taskService.insert(data),
        delete: id => this.taskService.remove(id)
      },
      link: {
        update: (data: Link) => this.linkService.update(data),
        create: (data: Link) => this.linkService.insert(data),
        delete: id => this.linkService.remove(id)
      }
    });

    /** Get data from the services */
    Promise.all([this.taskService.get(), this.linkService.get()]).then(([data, links]) => {
      gantt.parse({ data, links });
    });
  }
}
