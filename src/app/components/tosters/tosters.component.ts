import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tosters',
  templateUrl: './tosters.component.html',
  styleUrl: './tosters.component.scss',
  providers: [MessageService]
})
export class TostersComponent {
  constructor(private messageService: MessageService) {}

  /*Tooster*/
  showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showInfo() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  
  /*Position Tosters*/
    showTopLeft() {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showTopCenter() {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showBottomCenter() {
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

   /* Multiple Tosters*/
    show() {
      this.messageService.addAll([
          { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
          { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
          { severity: 'warn', summary: 'Message 3', detail: 'Message Content' }
      ]);
  }
   shows() {
    this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
}
clear() {
    this.messageService.clear();
}

/* Sticky Tosters*/


   


}

