import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AlertRes } from "../../../features/alerts/domain/alerts";

@Injectable({
  providedIn: 'root'
})
export class AlertsApiService {
  constructor(private http: HttpClient)  {}
  pullAlerts(): Observable<AlertRes> {
    return this.http.get<AlertRes>('http://localhost:3000/alerts', {headers: {
      }});
  }
}
