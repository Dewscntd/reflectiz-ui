import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AlertsFacade } from "./domain/alerts.facade.service";
import { ALERTS_SORT_ACTIONS, AlertSort, SortAction } from "./domain/alerts.consts";
import { AlertsApiService } from "../../shared/services/api/alerts-api.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AlertsFacade]
})
export class AlertsComponent implements OnInit {
  readonly sortActions = ALERTS_SORT_ACTIONS;

  alerts$ = this.alertsFacade.alerts$;
  isFetching$ = this.alertsFacade.isFetching$;

  constructor(private alertsFacade: AlertsFacade) { }

  ngOnInit(): void {
    this.alertsFacade.startPulling(15000);
  }

  onSortBy(action: SortAction) {
    switch (action.sortBy) {
      case AlertSort.severity:
        return this.alertsFacade.sortBySeverity();
      case AlertSort.source:
        return this.alertsFacade.sortBySource();
      case AlertSort.date:
        return this.alertsFacade.sortByDate();
    }

  }

  onAlertDismissed(id: string) {
    this.alertsFacade.onDismiss(id);
  }
}
