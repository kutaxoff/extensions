import { BooleanInput } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DatetimeAdapter } from '@erengee/extensions/core';
import { MtxDatetimepickerFilterType } from './datetimepicker-filtertype';

export const CLOCK_RADIUS = 50;
export const CLOCK_INNER_RADIUS = 27.5;
export const CLOCK_OUTER_RADIUS = 41.25;
export const CLOCK_TICK_RADIUS = 7.0833;

/** Possible views for datetimepicker clock. */
export type MtxClockView = 'hour' | 'minute' | 'second';

/**
 * A clock that is used as part of the datetimepicker.
 * @docs-private
 */
@Component({
  selector: 'mtx-clock',
  templateUrl: 'clock.html',
  styleUrls: ['clock.scss'],
  host: {
    '[class.mtx-clock]': 'true',
    'role': 'clock',
    '(mousedown)': '_handleMousedown($event)',
  },
  exportAs: 'mtxClock',
  encapsulation: ViewEncapsulation.None,
})
export class MtxClock<D> implements AfterContentInit {
  /** A function used to filter which dates are selectable. */
  @Input() dateFilter!: (date: D, type: MtxDatetimepickerFilterType) => boolean;

  /** Step over minutes. */
  @Input() interval: number = 1;

  /** Whether the clock uses 12 hour format. */
  @Input() twelvehour: boolean = false;

  /** Whether the clock allows to pick seconds. */
  @Input() withSeconds: boolean = false;

  /** Emits when the currently selected date changes. */
  @Output() selectedChange = new EventEmitter<D>();

  /** Emits when any date is activated. */
  @Output() activeDateChange = new EventEmitter<D>();

  /** Emits when any date is selected. */
  @Output() readonly _userSelection = new EventEmitter<void>();

  /** Hours, Minutes and Seconds representing the clock view. */
  _hours: any[] = [];

  _minutes: any[] = [];

  _seconds: any[] = [];

  /** Whether the clock is in hour view. */
  _hourView: boolean = true;

  /** Whether the clock is in second view. */
  _secondView: boolean = false;

  _selectedHour!: number;

  _selectedMinute!: number;

  _selectedSecond!: number;

  private _timeChanged = false;

  private mouseMoveListener: any;

  private mouseUpListener: any;

  constructor(private _element: ElementRef, private _adapter: DatetimeAdapter<D>) {
    this.mouseMoveListener = (event: any) => {
      this._handleMousemove(event);
    };
    this.mouseUpListener = () => {
      this._handleMouseup();
    };
  }

  /**
   * The date to display in this clock view.
   */
  @Input()
  get activeDate(): D {
    return this._activeDate;
  }
  set activeDate(value: D) {
    const oldActiveDate = this._activeDate;
    this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
    if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  private _activeDate!: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null {
    return this._selected;
  }
  set selected(value: D | null) {
    this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
    if (this._selected) {
      this.activeDate = this._selected;
    }
  }
  private _selected!: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null {
    return this._minDate;
  }

  set minDate(value: D | null) {
    this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _minDate!: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null {
    return this._maxDate;
  }
  set maxDate(value: D | null) {
    this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
  }
  private _maxDate!: D | null;

  /** Whether the clock should be started in hour or minute view. */
  @Input()
  set startView(value: MtxClockView) {
    this._hourView = value === 'hour';
    this._secondView = value === 'second';
  }

  get _hand(): any {
    let hour = this._adapter.getHour(this.activeDate);
    if (this.twelvehour) {
      if (hour === 0) {
        hour = 24;
      }
      this._selectedHour = hour > 12 ? hour - 12 : hour;
    } else {
      this._selectedHour = hour;
    }
    this._selectedMinute = this._adapter.getMinute(this.activeDate);
    this._selectedSecond = this._adapter.getSecond(this.activeDate);
    let deg = 0;
    let radius = CLOCK_OUTER_RADIUS;
    if (this._hourView) {
      const outer = this._selectedHour > 0 && this._selectedHour < 13;
      radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
      if (this.twelvehour) {
        radius = CLOCK_OUTER_RADIUS;
      }
      deg = Math.round(this._selectedHour * (360 / (24 / 2)));
    } else if (!this._secondView) {
      deg = Math.round(this._selectedMinute * (360 / 60));
    } else {
      deg = Math.round(this._selectedSecond * (360 / 60));
    }
    return {
      'transform': `rotate(${deg}deg)`,
      'height': `${radius}%`,
      'margin-top': `${50 - radius}%`,
    };
  }

  ngAfterContentInit() {
    this.activeDate = this._activeDate || this._adapter.today();
    this._init();
  }

  /** Handles mousedown events on the clock body. */
  _handleMousedown(event: any) {
    this._timeChanged = false;
    this.setTime(event);
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('touchmove', this.mouseMoveListener);
    document.addEventListener('mouseup', this.mouseUpListener);
    document.addEventListener('touchend', this.mouseUpListener);
  }

  _handleMousemove(event: any) {
    event.preventDefault();
    this.setTime(event);
  }

  _handleMouseup() {
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('touchmove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
    document.removeEventListener('touchend', this.mouseUpListener);
    if (this._timeChanged) {
      this.selectedChange.emit(this.activeDate);
      if (!this._hourView) {
        if ((this.withSeconds && this._secondView) || !this.withSeconds) {
          this._userSelection.emit();
        }
      }
    }
  }

  /** Initializes this clock view. */
  private _init() {
    this._hours.length = 0;
    this._minutes.length = 0;
    this._seconds.length = 0;

    const hourNames = this._adapter.getHourNames();
    const minuteNames = this._adapter.getMinuteNames();
    const secondNames = this._adapter.getSecondNames();

    if (this.twelvehour) {
      for (let i = 1; i < hourNames.length / 2 + 1; i++) {
        const radian = (i / 6) * Math.PI;
        const radius = CLOCK_OUTER_RADIUS;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          i + 1,
          0,
          0
        );
        const enabled =
          (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
          (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
        });
      }
    } else {
      for (let i = 0; i < hourNames.length; i++) {
        const radian = (i / 6) * Math.PI;
        const outer = i > 0 && i < 13;
        const radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
        const date = this._adapter.createDatetime(
          this._adapter.getYear(this.activeDate),
          this._adapter.getMonth(this.activeDate),
          this._adapter.getDate(this.activeDate),
          i,
          0,
          0
        );
        const enabled =
          (!this.minDate || this._adapter.compareDatetime(date, this.minDate, false) >= 0) &&
          (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate, false) <= 0) &&
          (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.HOUR));
        this._hours.push({
          value: i,
          displayValue: i === 0 ? '00' : hourNames[i],
          enabled,
          top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
          left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
          fontSize: i > 0 && i < 13 ? '' : '80%',
        });
      }
    }

    for (let i = 0; i < minuteNames.length; i += 5) {
      const radian = (i / 30) * Math.PI;
      const date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        i,
        0
      );
      const enabled =
        (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
        (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
        (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.MINUTE));
      this._minutes.push({
        value: i,
        displayValue: i === 0 ? '00' : minuteNames[i],
        enabled,
        top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
        left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
      });
    }

    for (let i = 0; i < secondNames.length; i += 5) {
      const radian = (i / 30) * Math.PI;
      const date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        this._adapter.getMinute(this.activeDate),
        i
      );
      const enabled =
        (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
        (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
        (!this.dateFilter || this.dateFilter(date, MtxDatetimepickerFilterType.SECOND));
      this._seconds.push({
        value: i,
        displayValue: i === 0 ? '00' : secondNames[i],
        enabled,
        top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
        left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
      });
    }
  }

  /**
   * Set Time
   * @param event
   */
  private setTime(event: any) {
    const trigger = this._element.nativeElement;
    const triggerRect = trigger.getBoundingClientRect();
    const width = trigger.offsetWidth;
    const height = trigger.offsetHeight;
    const pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
    const pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
    const x = width / 2 - (pageX - triggerRect.left - window.pageXOffset);
    const y = height / 2 - (pageY - triggerRect.top - window.pageYOffset);
    let radian = Math.atan2(-x, y);
    const unit = Math.PI / (this._hourView ? 6 : this.interval ? 30 / this.interval : 30);
    const z = Math.sqrt(x * x + y * y);
    const outer =
      this._hourView &&
      z > (width * (CLOCK_OUTER_RADIUS / 100) + width * (CLOCK_INNER_RADIUS / 100)) / 2;

    if (radian < 0) {
      radian = Math.PI * 2 + radian;
    }
    let value = Math.round(radian / unit);

    let date;
    if (this._hourView) {
      if (this.twelvehour) {
        value = value === 0 ? 12 : value;
      } else {
        if (value === 12) {
          value = 0;
        }
        value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
      }
      date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        value,
        this._adapter.getMinute(this.activeDate),
        this._adapter.getSecond(this.activeDate)
      );
    } else if (!this._secondView) {
      if (this.interval) {
        value *= this.interval;
      }
      if (value === 60) {
        value = 0;
      }
      date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        value,
        this._adapter.getSecond(this.activeDate)
      );
    } else {
      if (this.interval) {
        value *= this.interval;
      }
      if (value === 60) {
        value = 0;
      }
      date = this._adapter.createDatetime(
        this._adapter.getYear(this.activeDate),
        this._adapter.getMonth(this.activeDate),
        this._adapter.getDate(this.activeDate),
        this._adapter.getHour(this.activeDate),
        this._adapter.getMinute(this.activeDate),
        value
      );
    }

    this._timeChanged = true;
    this.activeDate = date;
    this.activeDateChange.emit(this.activeDate);
  }

  static ngAcceptInputType_twelvehour: BooleanInput;
  static ngAcceptInputType_withSeconds: BooleanInput;
}
