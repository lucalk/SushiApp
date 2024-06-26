import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupBoxService {

  constructor(private http:HttpClient) { }

  // Récup les données de l'api
  public getBoxes():Observable<any>{
    return this.http.get(environment.apiBaseUrl)
  }
}
