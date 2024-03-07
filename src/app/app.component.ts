import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LayoutModule } from './core/layout/layout.module'
@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <div>
      <app-layout></app-layout>
    </div>
  `,
  imports: [
    LayoutModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
