import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ConfirmWindowComponent } from '../confirm-window/confirm-window.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  faDownload = faDownload;
  title = 'Bogdan Kostadinov';
  mode!: 'over' | 'side';
  openSidenav!: boolean;
  sub!: Subscription;
  bsModalRef!: BsModalRef;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.sub = this.getScreenWidth().subscribe((width) => {
      if (width < 930) {
        this.mode = 'over';
        this.openSidenav = false;
      } else if (width > 930) {
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onResize(event: any) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
  openConfirmationWindow(url: string): void {
    this.bsModalRef = this.modalService.show(ConfirmWindowComponent, {
      initialState: {
        message: 'Are you sure you want to navigate?',
      },
    });

    this.bsModalRef.content.onConfirm.subscribe(() => {
      window.open(url)?.focus();
    });
  }
}
