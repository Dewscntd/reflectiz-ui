import { NgModule } from '@angular/core';
import { LayoutComponent } from "./layout.component";
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule
} from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatIcon,
    MatSidenav,
    MatButton,
    MatIconButton,
    MatDrawerContainer,
    MatDrawer,
    MatSidenavModule,
    RouterOutlet,
    RouterModule,
    NgOptimizedImage,
    MatMenu,
    MatMenuItem,
    NgIf,
    MatMenuTrigger
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
