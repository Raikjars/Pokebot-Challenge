import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "https://api.openai.com/v1/chat" //https://api.openai.com/v1/chat/ https://pokeapi.co/api/v2/ 
  private baseUrl2: string = "https://pokeapi.co/api/v2"
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params: new HttpParams(),
  };

  constructor(private http: HttpClient) { }

  get(
    path: string,
    params:
      | {
          [param: string]:
            | string
            | number
            | boolean
            | ReadonlyArray<string | number | boolean>;
        }
      | undefined = undefined,
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    if (params) this.httpOptions.params = new HttpParams({ fromObject: { ...params } });
    return this.http.get(`${this.baseUrl2}${path}`, this.httpOptions);
  }

  patch(
    path: string,
    body: Object = {},
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    return this.http
      .patch<any>(
        `${this.baseUrl}${path}`,
        JSON.stringify(body),
        this.httpOptions
      );
  }

  put(
    path: string,
    body: Object = {},
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    return this.http
      .put<any>(
        `${this.baseUrl}${path}`,
        JSON.stringify(body),
        this.httpOptions
      );
  }

  putFile(
    path: string,
    body: Object = {},
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    return this.http
      .put<any>(
        `${path}`,
        body,
        this.httpOptions
      );
  }

  post(
    path: string,
    body: Object = {},
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    this.httpOptions.params = new HttpParams();
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    return this.http
      .post(`${this.baseUrl}${path}`, JSON.stringify(body), this.httpOptions);
  }

  delete(
    path: string,
    body: Object = {},
    headers:
      | string
      | { [name: string]: string | number | (string | number)[] }
      | undefined = undefined
  ): Observable<any> {
    this.httpOptions.params = new HttpParams();
    if (headers) this.httpOptions.headers = new HttpHeaders(headers);
    if(Object.keys(body).length === 0){
      return this.http
        .delete(`${this.baseUrl}${path}`, {
            headers: this.httpOptions.headers
          });
      
    }else{
      return this.http
        .delete(`${this.baseUrl}${path}`, {
            headers: this.httpOptions.headers,
            body: JSON.stringify(body)
          });
    }
    
  }

}
