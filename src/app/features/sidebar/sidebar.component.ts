import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SidebarState } from './models';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() tag: string;
  stateChange: Observable<SidebarState>;
  expandWidth: number;
  subscription: Subscription;

  constructor(private sidebarService: SidebarService, public host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (!this.tag) throw Error("Sidebar's tag property is required!");

    this.sidebarService.create(this.tag);
    this.stateChange = this.sidebarService.get(this.tag);

    this.subscription = this.stateChange.subscribe((state) => {
      this.expandWidth = state.expandWidth;
      state.isCollapsed ? this.collapseSidebar() : this.expandSidebar();
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  handleExpandWidthChange(expandWidth: number) {
    this.sidebarService.update(this.tag, {
      expandWidth,
    });
  }

  private expandSidebar() {
    this.host.nativeElement.style.width = `${this.expandWidth}px`;
  }

  private collapseSidebar() {
    this.host.nativeElement.style.width = '0';
  }

  toggle() {
    this.sidebarService.toggle(this.tag);
  }

  expand() {
    this.sidebarService.expand(this.tag);
  }

  collapse() {
    this.sidebarService.collapse(this.tag);
  }

  tpl() {
    console.log('Template update');
  }
}
