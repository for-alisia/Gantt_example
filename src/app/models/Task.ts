export interface Task {
  id: number;
  start_date: string;
  text: string;
  progress: number;
  duration: number;
  parent?: number;
}
