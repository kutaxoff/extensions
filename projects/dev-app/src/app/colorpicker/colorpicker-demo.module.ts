import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxColorpickerModule } from '@qoollo/extensions/colorpicker';

import { ColorPickerDemoComponent } from './colorpicker-demo.component';

import { ColorSketchModule } from 'ngx-color/sketch';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: ColorPickerDemoComponent }]),
    MtxColorpickerModule,
    ColorSketchModule,
  ],
  declarations: [ColorPickerDemoComponent],
})
export class ColorPickerDemoModule {}
