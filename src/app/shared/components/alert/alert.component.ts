import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() errorMessage!: string;
  @Output() clearMesage = new EventEmitter<void>();

  clearErrorMessage() {
    this.clearMesage.emit();
  }
}
