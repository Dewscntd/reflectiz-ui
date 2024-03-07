import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from "./alerts.component";
import { RouterModule, Routes } from "@angular/router";
import { AlertComponent } from "./components/alert/alert.component";
import { MatCard } from "@angular/material/card";
import { MatList, MatListItem } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { MatBadge } from "@angular/material/badge";
import { MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuModule } from "@angular/material/menu";
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { SeverityColorPipe } from "./severity-color.pipe";


export const routes: Routes = [{path: '', component: AlertsComponent}]
@NgModule({
  declarations: [AlertsComponent, AlertComponent, SeverityColorPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCard,
    MatList,
    MatListItem,
    MatIcon,
    MatDivider,
    MatBadge,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf
  ],
  exports: [RouterModule],
})
export class AlertsModule { }
