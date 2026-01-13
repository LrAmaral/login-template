import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-login-layout.html',
  styleUrls: ['./default-login-layout.css'],
})
export class DefaultLoginLayout {
  @Input() login: string = '';
  @Input() primaryBtnText: string = '';
  @Input() routeText: string = '';
  @Input() route: string = '';
  @Input() disablePrimaryBtn: boolean = true;

  @Output() submitEvent = new EventEmitter<void>();
  @Output() navigateEvent = new EventEmitter<void>();

  currentRoute = '';

  constructor(public router: Router) {
    this.currentRoute

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  handleSubmit() {
    this.submitEvent.emit();
  }
}
