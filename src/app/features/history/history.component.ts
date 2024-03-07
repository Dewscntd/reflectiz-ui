import { Component, OnInit } from "@angular/core";
import { HistoryFacade } from "./history.facade";
import { Alert } from "../alerts/domain/alerts";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  providers: [HistoryFacade]
})
export class HistoryComponent implements OnInit{
  dataSource!: Alert[];
  displayedColumns: string[] = ['name', 'source', 'severity', 'date'];

  constructor(private facade: HistoryFacade) {}

  ngOnInit(): void {
    this.dataSource = this.facade.getAlerts();
  }

}
