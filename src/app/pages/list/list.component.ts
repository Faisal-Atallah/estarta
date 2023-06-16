import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { trackByFn, unsubscribe } from 'src/app/core/utils';
import { ListService } from './list.service';
import { List, ListItem } from './list.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  list: ListItem[] = [];
  editedList: ListItem[] = [];
  requestCompleted?: boolean;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   * @param {ListService}_listService
   * @param {ChangeDetectorRef}_changeDetectorRef
   */
  constructor(
    private _listService: ListService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  /**
   * On Init
   */
  ngOnInit(): void {
    this._getList();
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    unsubscribe(this._unsubscribeAll);
  }

  /**
   * Get List
   * @returns {void}
   */
  private _getList(): void {
    this._listService.list$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((list: List[]) => {
        this._convertStringToBoolean(list);
        // Mark for check
        this._changeDetectorRef.markForCheck();
      })
      .add(() => {
        this.requestCompleted = true;
      });
  }

  /**
   * The API Return checked as string so i converted here to boolean
   * @param list
   */
  private _convertStringToBoolean(list: any) {
    for (let item in list?.data) {
      list.data[item].checked = /^true$/i.test(list.data[item].checked);
      this.list?.push(list.data[item]);
    }
  }

  /**
   * Add Item To Edited List
   * @param {ListItem}item
   * @returns {void}
   */
  private _addItemToEditedList(item: ListItem): void {
    if (this.editedList.indexOf(item) === -1) {
      this.editedList.push(item);
    }

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Check Box Value Changed
   * @param {ListItem}item
   * @returns {void}
   */
  checkBoxValueChanged(item: ListItem): void {
    this._addItemToEditedList(item);
  }

  /**
   * Drop
   * @param {CdkDragDrop<string[]>}event
   * @returns {void}
   */
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this._addItemToEditedList(event.item.data);

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Track ByFn
   * @param {number}index
   * @param {any}id
   * @returns {any}
   */
  trackByFn(index: number, id: any): any {
    return trackByFn(index, id);
  }
}
