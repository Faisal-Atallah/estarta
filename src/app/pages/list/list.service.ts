import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from './list.types';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private _list: BehaviorSubject<List[] | any> = new BehaviorSubject(null);


  /**
   * Constructor
   * @param {HttpClient}_httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  /**
   * Getter for list
   * @returns {Observable<List[]>}
   */
  get list$(): Observable<List[]> {
    return this._list.asObservable();
  }

  /**
   * Get List
   * @returns {Observable<List[]>}
   */
  getList(): Observable<List[]> {
    return this._httpClient.get<List[]>(environment.serverOrigin).pipe(
      tap((response: List[]) => {
        this._list.next(response);
      })
    );
  }
}
