import { Component, ViewEncapsulation } from '@angular/core';
import { NavItem } from 'src/app/shared/types';

@Component({
  selector: 'app-layout-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerticalComponent {
  navItems: NavItem[] = [
    { id: '1', title: 'List', link: '', icon: 'list' }
  ];

  /**
   * Constructor
   *
   */
  constructor() {}
}
