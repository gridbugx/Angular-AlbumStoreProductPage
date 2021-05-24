import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  _albumUrl: string = '../assets/album.json'

  constructor(private _http: Http) { }

  getAlbum(id:number) : Observable<any>{
    return this._http.get(this._albumUrl).pipe(map((response: Response) => response.json()))  // #9
  }
}
