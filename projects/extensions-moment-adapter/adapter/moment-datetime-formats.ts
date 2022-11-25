import { MtxDatetimeFormats } from '@ng-matero/extensions/core';

export const MTX_MOMENT_DATETIME_FORMATS: MtxDatetimeFormats = {
  parse: {
    dateInput: 'L',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    datetimeInput: 'L LT',
    timeInput: 'LT',
    datetimesecondsInput: 'L LTS',
    timesecondsInput: 'LTS',
  },
  display: {
    dateInput: 'L',
    monthInput: 'MMMM',
    yearInput: 'YYYY',
    datetimeInput: 'L LT',
    timeInput: 'LT',
    datetimesecondsInput: 'L LTS',
    timesecondsInput: 'LTS',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    popupHeaderDateLabel: 'ddd, DD MMM',
  },
};
