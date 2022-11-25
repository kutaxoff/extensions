import { InjectionToken } from '@angular/core';

export interface MtxDatetimeFormats {
  parse: {
    dateInput?: any;
    monthInput?: any;
    yearInput?: any;
    timeInput?: any;
    timesecondsInput?: any;
    datetimeInput?: any;
    datetimesecondsInput?: any;
  };
  display: {
    dateInput: any;
    monthInput: any;
    yearInput?: any;
    timeInput: any;
    timesecondsInput?: any;
    datetimeInput: any;
    datetimesecondsInput?: any;
    monthYearLabel: any;
    dateA11yLabel: any;
    monthYearA11yLabel: any;
    popupHeaderDateLabel: any;
  };
}

export const MTX_DATETIME_FORMATS = new InjectionToken<MtxDatetimeFormats>('mtx-datetime-formats');
