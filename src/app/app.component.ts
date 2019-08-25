import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-loader';

  constructor(private http: HttpClient) { }

  callApi() {
    this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
      .subscribe(data => {
        console.log(data);
      });
  }
}
