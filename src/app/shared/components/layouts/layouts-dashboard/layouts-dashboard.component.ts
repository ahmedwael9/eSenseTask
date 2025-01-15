import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { UiImageComponent } from "../../ui-elements/ui-image/ui-image.component";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layouts-dashboard',
  templateUrl: './layouts-dashboard.component.html',
  styleUrls: ['./layouts-dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    UiImageComponent,
    MatSidenavModule,
],
})
export class LayoutsDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabs = [
    { title: 'لوحة القيادة',},
    { title: 'اعدادات النظام'},
  ];

  selectedTabIndex = 0;

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }
  

}
