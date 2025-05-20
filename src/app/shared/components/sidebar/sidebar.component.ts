import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

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
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  constructor(private dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Navigate to link?',
        message: 'Are you sure you want to navigate to ' + url + '?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        window.open(url)?.focus();
      }
    });
  }
  downloadCv(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Download CV?',
        message: "Are you sure you want to download Bogdan's resume?",
      },
      panelClass: 'dark-dialog-theme',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'assets/Bogdan CV.pdf');
        link.setAttribute('download', 'Bogdan_Kostadinov_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }
}
