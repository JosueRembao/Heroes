import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 1, name: 'Ignis' },
        { id: 2, name: 'Noctis' },
        { id: 3, name: 'Gladio' },
        { id: 4, name: 'Prompto' },
        { id: 5, name: 'Nyx' },
        { id: 6, name: 'Ravus' },
        { id: 7, name: 'Regis' },
        { id: 8, name: 'Luna' },
        { id: 9, name: 'Iris' },
        { id: 10, name: 'Cid' }
    ];
    return {heroes};
  }
}