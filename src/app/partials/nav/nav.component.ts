import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { trackByFn } from 'src/app/core/utils';
import { NavItem } from 'src/app/shared/types';

@Component({
  selector: 'app-partials-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @Input() navItems?: NavItem[];

  /**
   * Track ByFn
   * @param {number}index
   * @param {any}id
   * @returns {sny}
   */
  trackByFn(index: number, id: any): any {
    return trackByFn(index, id);
  }
}
