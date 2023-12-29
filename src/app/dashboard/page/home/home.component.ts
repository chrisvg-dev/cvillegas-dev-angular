import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: (type: ConfirmEventType) => {
          switch (type) {
              case ConfirmEventType.REJECT:
                  {
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                  }
              case ConfirmEventType.CANCEL:
                  this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                  break;
              default: 
                  break;
          }
      }
    });
  }

  confirm2() {
      this.confirmationService.confirm({
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
          },
          reject: (type: ConfirmEventType) => {
              switch (type) {
                  case ConfirmEventType.REJECT:
                      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                      break;
                  case ConfirmEventType.CANCEL:
                      this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                      break;
              }
          }
      });
  }
}
