import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStorie } from './shared/interfaces';

@Injectable()
export class StoriesService {

  constructor(private http: HttpClient) { }

  loadStories() {
    return this.http.get<IStorie[]>('https://hub.dummyapis.com/singlelistwithid?text=Test&noofRecords=20')
  }
}
