import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosGridLoaderService {
  apiUrlAuth = 'http://interview.agileengine.com';

  constructor(private http: HttpClient) {}

  /**
   * Method used to get the photos first page
   * @returns First list of images information
   */
  gridPhotosPaginationFirst() {
    const headers = new Headers();
    const token = localStorage.getItem('token');
    var reqHeader;
    if (token) {
      reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(token),
      });
    }

    const apiURL = `${this.apiUrlAuth}/images`;
    return this.http.get(apiURL, { headers: reqHeader });
  }

  /**
   * Method used to get the photos page by page
   * @returns list of images information by page
   */
  gridPhotosPagination(pageNumber: number) {
    const token = localStorage.getItem('token');
    var reqHeader;
    if (token) {
      reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(token),
      });
    }
    const apiURL = `${this.apiUrlAuth}/images?pages` + pageNumber;
    return this.http.get(apiURL, { headers: reqHeader });
  }
  /**
   * Method used to get the photos page by Id
   * @returns photo detail information
   */
  gridPhotosId(Id: number) {
    const token = localStorage.getItem('token');
    var reqHeader;
    if (token) {
      reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + JSON.parse(token),
      });
    }
    const apiURL = `${this.apiUrlAuth}/images/$` + Id;
    return this.http.get(apiURL, { headers: reqHeader });
  }
}
