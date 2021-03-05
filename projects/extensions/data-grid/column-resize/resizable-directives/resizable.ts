/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Directive,
  ElementRef,
  Inject,
  Injector,
  NgZone,
  ViewContainerRef,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import {
  CdkColumnDef,
  _CoalescedStyleScheduler,
  _COALESCED_STYLE_SCHEDULER,
} from '@angular/cdk/table';
import {
  ColumnResize,
  ColumnResizeNotifierSource,
  HeaderRowEventDispatcher,
  ResizeStrategy,
} from '@ng-matero/extensions/column-resize';

import { AbstractMatResizable, RESIZABLE_HOST_BINDINGS, RESIZABLE_INPUTS } from './common';

/**
 * Explicitly enables column resizing for a mat-header-cell.
 */
@Directive({
  selector: 'mat-header-cell[resizable], th[mat-header-cell][resizable]',
  host: RESIZABLE_HOST_BINDINGS,
  inputs: RESIZABLE_INPUTS,
})
export class MatResizable extends AbstractMatResizable {
  @Input()
  get resizable() {
    return this.isResizable;
  }
  set resizable(newValue: any) {
    this.isResizable = newValue == null || newValue === '' || newValue;
  }

  isResizable = true;

  protected readonly document: Document;

  constructor(
    protected readonly columnDef: CdkColumnDef,
    protected readonly columnResize: ColumnResize,
    protected readonly directionality: Directionality,
    @Inject(DOCUMENT) document: any,
    protected readonly elementRef: ElementRef,
    protected readonly eventDispatcher: HeaderRowEventDispatcher,
    protected readonly injector: Injector,
    protected readonly ngZone: NgZone,
    protected readonly overlay: Overlay,
    protected readonly resizeNotifier: ColumnResizeNotifierSource,
    protected readonly resizeStrategy: ResizeStrategy,
    @Inject(_COALESCED_STYLE_SCHEDULER)
    protected readonly styleScheduler: _CoalescedStyleScheduler,
    protected readonly viewContainerRef: ViewContainerRef,
    protected readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.document = document;
  }
}