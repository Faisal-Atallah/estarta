import { Subject } from 'rxjs';

/**
 * unsubscribe
 * @param {Subject<T>}subscription
 * @return {void}
 */
export function unsubscribe<T = any>(subscription: Subject<void>): void {
  subscription.next();
  subscription.complete();
}

/**
 * Track ByFn
 * @param {number}index
 * @param {any}item
 * @returns {any}
 */
export function trackByFn(index: number, item: any): any {
  return item.id || index;
}
