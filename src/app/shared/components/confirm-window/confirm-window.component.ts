import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.scss'],
})
export class ConfirmWindowComponent {
  @Input() message = 'Are you sure?';

  public onConfirm: Subject<void> = new Subject();
  public onClose: Subject<void> = new Subject();

  constructor(private modalService: BsModalService) {}

  confirm() {
    this.onConfirm.next();
    this.modalService.hide();
  }

  close() {
    this.onClose.next();
    this.modalService.hide();
  }
}
