import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ListService } from './list.service';
import { List } from './list.types';

@Injectable({
  providedIn: 'root',
})
export class ListResolver implements Resolve<any> {
  /**
   * Constructor
   */
  constructor(private _listService: ListService) {}

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot}route
   * @param {RouterStateSnapshot}state
   * @returns {Observable<List[]> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<List[]> | any {
    return this._listService.getList();
  }
}
