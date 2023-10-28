import { NgModule } from '@angular/core';

import { MtxAlertModule } from '@erengee/extensions/alert';
import { MtxButtonModule } from '@erengee/extensions/button';
import { MtxCheckboxGroupModule } from '@erengee/extensions/checkbox-group';
import { MtxColorpickerModule } from '@erengee/extensions/colorpicker';
import { MtxGridModule } from '@erengee/extensions/grid';
import { MtxDatetimepickerModule } from '@erengee/extensions/datetimepicker';
import { MtxDialogModule } from '@erengee/extensions/dialog';
import { MtxDrawerModule } from '@erengee/extensions/drawer';
import { MtxLoaderModule } from '@erengee/extensions/loader';
import { MtxPopoverModule } from '@erengee/extensions/popover';
import { MtxProgressModule } from '@erengee/extensions/progress';
import { MtxSelectModule } from '@erengee/extensions/select';
import { MtxSliderModule } from '@erengee/extensions/slider';
import { MtxSplitModule } from '@erengee/extensions/split';
import { MtxTooltipModule } from '@erengee/extensions/tooltip';

import { MtxFormGroupModule } from '@erengee/extensions/form-group';
import { MtxText3dModule } from '@erengee/extensions/text3d';

import { MtxMomentDatetimeModule } from '@erengee/extensions-moment-adapter';

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
