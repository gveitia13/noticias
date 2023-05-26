import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {

  }

  getNoticia(params: any): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${params.pais}&category=${params.categoria}&apiKey=2cbc6a760c3f48cebfaa57f9ac8f3b35`
    return this.http.get(URL)
  }
}
