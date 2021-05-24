import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json'

  constructor(private _http: Http) { }

  getAlbum(id:number) : Observable<any> {
    //console.log('service returning ', this._http.get(this._albumUrl).pipe(map((response: Response) => response.json())) )

    return this._http.get(this._albumUrl).map((response: Response) => response.json())  // #9
  }
}
