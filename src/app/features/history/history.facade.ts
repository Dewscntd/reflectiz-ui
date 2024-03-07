import { Injectable } from "@angular/core";
import { AlertsState, AlertsStateService } from "../../shared/state/alerts.service";

@Injectable()
export class HistoryFacade{
  constructor(private alertsStateService: AlertsStateService) {}

  getAlerts() {
    return this.alertsStateService.fetchAlerts();
  }
}
