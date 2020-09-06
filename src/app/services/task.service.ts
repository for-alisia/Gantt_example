/** Angular */
import { Injectable } from '@angular/core';
/** Models */
import { Task } from '../models/Task';

@Injectable()
export class TaskService {
  get(): Promise<Task[]> {
    return Promise.resolve([
      { id: 1, text: 'Project_1', start_date: '2020-09-10 00:00', duration: 3, progress: 0.8 },
      { id: 2, text: 'Project_2', start_date: '2020-09-12 00:00', duration: 2, progress: 0.2 }
    ]);
  }
}
