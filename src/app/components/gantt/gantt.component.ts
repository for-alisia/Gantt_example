/** Angular */
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
/** Libraries */
import { gantt } from 'dhtmlx-gantt';
/** Services */
import { TaskService } from '../../services/task.service';
import { LinkService } from '../../services/link.service';

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
    /** Get data from the services */
    Promise.all([this.taskService.get(), this.linkService.get()]).then(([data, links]) => {
      gantt.parse({ data, links });
    });
  }
}
