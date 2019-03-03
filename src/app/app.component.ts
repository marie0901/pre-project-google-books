import { Component } from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mm-google-books';
  query: string;

}

// API_key::::::::
// AIzaSyBze8EJUXlh3rZ7eSUaqNRbhrnvUuWEb-s
