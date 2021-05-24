import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Http,Response } from '@angular/http'

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json'

  constructor(private _http: Http) { }

  albumInfo: Observable<Album> = null

  //getAlbum(id: number) :Observable<Album> {
  getAlbum(id: number):Observable<Album> {
      return this._http.get(this._albumUrl).map((response) => response.json()) as Observable<Album>;
    }

}
