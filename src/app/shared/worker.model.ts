export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone:"9508154715", type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone:"9508154716", type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone:"9508154717", type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone:"9508154718", type: 3 }
];
