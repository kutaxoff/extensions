import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@qoollo/extensions/alert';
import { MtxButtonModule } from '@qoollo/extensions/button';
import { MtxCheckboxGroupModule } from '@qoollo/extensions/checkbox-group';
import { MtxColorpickerModule } from '@qoollo/extensions/colorpicker';
import { MtxGridModule } from '@qoollo/extensions/grid';
import { MtxDatetimepickerModule } from '@qoollo/extensions/datetimepicker';
import { MtxDialogModule } from '@qoollo/extensions/dialog';
import { MtxDrawerModule } from '@qoollo/extensions/drawer';
import { MtxLoaderModule } from '@qoollo/extensions/loader';
import { MtxPopoverModule } from '@qoollo/extensions/popover';
import { MtxProgressModule } from '@qoollo/extensions/progress';
import { MtxSelectModule } from '@qoollo/extensions/select';
import { MtxSliderModule } from '@qoollo/extensions/slider';
import { MtxSplitModule } from '@qoollo/extensions/split';
import { MtxTooltipModule } from '@qoollo/extensions/tooltip';

import { MtxFormGroupModule } from '@qoollo/extensions/form-group';
import { MtxText3dModule } from '@qoollo/extensions/text3d';

import { MtxMomentDatetimeModule } from '@qoollo/extensions-moment-adapter';

@NgModule({
  exports: [
    MtxAlertModule,
    MtxButtonModule,
    MtxCheckboxGroupModule,
    MtxColorpickerModule,
    MtxGridModule,
    MtxDatetimepickerModule,
    MtxDialogModule,
    MtxDrawerModule,
    MtxLoaderModule,
    MtxPopoverModule,
    MtxProgressModule,
    MtxSelectModule,
    MtxSliderModule,
    MtxSplitModule,
    MtxTooltipModule,
    MtxFormGroupModule,
    MtxText3dModule,
    MtxMomentDatetimeModule,
  ],
  declarations: [],
})
export class MaterialExtensionsModule {}
