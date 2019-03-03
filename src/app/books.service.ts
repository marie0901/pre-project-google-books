import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * BookService works querying the Google Books Web API
 * example:
 * https://www.googleapis.com/books/v1/volumes?q=forest
 */

@Injectable()
export class BooksService {
  static BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {
  }

  query( params: string = ''): Observable<any[]> {
    let queryURL = `${BooksService.BASE_URL}&key=AIzaSyBze8EJUXlh3rZ7eSUaqNRbhrnvUuWEb-s`;
    if (params) {
      queryURL = `${BooksService.BASE_URL}?q=${params}&key=AIzaSyBze8EJUXlh3rZ7eSUaqNRbhrnvUuWEb-s`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }
}




export const BOOKS_PROVIDERS: Array<any> = [
  { provide: BooksService, useClass: BooksService }
];
