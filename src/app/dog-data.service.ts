import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class DogDataService {
  URL = 'https://dog.ceo/api/breeds/list/all';
  dogsList = [];
  dogURL = ''

  constructor(private http: HttpClient) {
  }

  getAllDogs() {
    this.http.get(this.URL).subscribe((res: { message }) => {
      Object.keys(res.message).forEach(dog => this.dogsList.push(dog));
    });
  }

  getOneDog(dog) {
    return this.http.get(`https://dog.ceo/api/breed/${dog}/images/random`).pipe(map((res: {message}) => {
      this.dogURL = res.message;
      return this.dogURL;
    }));
  }

}
