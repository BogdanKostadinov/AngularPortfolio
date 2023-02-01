import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  title = 'Bogdan Kostadinov CV';
  mode!: 'over' | 'side';
  openSidenav!: boolean;
  sub!: Subscription;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  ngOnInit(): void {
    this.sub = this.getScreenWidth().subscribe((width) => {
      if (width < 640) {
        this.mode = 'over';
        this.openSidenav = false;
      } else if (width > 640) {
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
