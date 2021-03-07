import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiMasterService {
  //This service is suppose to host all the apis that need to be use on the app
  apiUrlAuth = 'http://interview.agileengine.com';

  constructor() {}
}
