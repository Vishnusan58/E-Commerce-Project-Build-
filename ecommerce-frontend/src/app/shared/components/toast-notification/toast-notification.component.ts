import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html'
})
export class ToastNotificationComponent {
  @Input() message = 'Action completed successfully.';
  @Input() type: 'success' | 'error' | 'info' = 'info';
}
