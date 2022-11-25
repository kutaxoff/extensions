import { MtxDatetimeFormats } from '@ng-matero/extensions/core';

export const MTX_DATE_FNS_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'P',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    datetimeInput: 'P p',
    timeInput: 'p',
    datetimesecondsInput: 'P pp',
    timesecondsInput: 'pp',
  },
  display: {
    dateInput: 'P',
    monthInput: 'LLLL',
    yearInput: 'yyyy',
    datetimeInput: 'P p',
    timeInput: 'p',
    datetimesecondsInput: 'P pp',
    timesecondsInput: 'pp',
    monthYearLabel: 'yyyy',
    dateA11yLabel: 'LLLL dd, yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
    popupHeaderDateLabel: 'ccc, dd LLL',
  },
};
