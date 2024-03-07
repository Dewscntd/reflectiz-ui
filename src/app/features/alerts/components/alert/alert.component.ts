import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Alert } from "../../domain/alerts";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  @Input() alert!: Alert;

  @Output() alertDismissed = new EventEmitter();

  onDismiss() {
    this.alert = {...this.alert, isDismissed: true};
    this.alertDismissed.emit(this.alert.id);
  }
}
