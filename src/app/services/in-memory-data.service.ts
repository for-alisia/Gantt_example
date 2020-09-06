import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, text: 'Проект №1', start_date: '2020-09-10 00:00', duration: 4, progress: 0.7 },
      { id: 2, text: 'Проект №2', start_date: '2020-09-13 00:00', duration: 2.6, progress: 0.3 }
    ];
    const links = [{ id: 1, source: 1, target: 2, type: '0' }];
    return { tasks, links };
  }
}
