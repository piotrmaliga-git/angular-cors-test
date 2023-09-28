import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mix-oferty';

  // private baseUrl = 'https://leadstar.pl/api';

  // private url: string = 'https://leadstar.pl/api/products';

  // urlData = {
  //   method: 'POST',
  //   mode: 'no-cors',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': '*',
  //   },
  //   body: {
  //     partner_id: '76413',
  //     api_key:
  //       '75ca41fd3d558560da4122f2b6804a4affcaa531afbe9f95a116cefbe30516ea',
  //   },
  // };

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/products`);
  // }

  ngOnInit(): void {
    //this.getProducts();

    this.http
      .post(
        'https://leadstar.pl/api/products',
        {
          partner_id: '76413',
          api_key:
            '75ca41fd3d558560da4122f2b6804a4affcaa531afbe9f95a116cefbe30516ea',
        },
        {
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': '*',
            Accept: 'application/xml',
            // Origin: 'http://localhost:4200/',
          },
          withCredentials: true,
        }
      )
      .subscribe((val) => {
        console.log(val);
      });
  }
}
