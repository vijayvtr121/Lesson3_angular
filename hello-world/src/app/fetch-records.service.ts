import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchRecordsService {
  info1: string[] = ['vIJAY', '23','male']
  info2: string[] = ['JAY', '32','male']
  info3: string[] = ['Mary', '64','female']

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
