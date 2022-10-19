import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompany } from 'src/app/core/interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/company.json';

  getConfig() {
    return this.http.get<ICompany>(this.configUrl);
  }
  
}
