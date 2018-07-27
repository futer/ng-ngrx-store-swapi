import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {
  }

  getCharacters(action) {
    return this.http.get(`${environment.apiUrl}${action}`)
      .pipe(
        map((res: any) => {
          const data = res.results;
          const newData = data.map((element) => {
            const wordName = this.getAdditionalData('planets', element.homeworld);
            const films = this.getAdditionalData('films', element.films);
            return {
              ...element,
              homeworld: wordName,
              films: films
            };
          });
          return newData;
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAdditionalData(action, url) {
    if (action === 'films') {
      const filmsSelected = [];
      url.map((res) => {
        filmsSelected.push(this.http.get(res));
      });
      return filmsSelected;
    } else if (action === 'planets') {
      return this.http.get(url);
    }
  }

}
