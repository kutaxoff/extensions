import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxPopoverModule } from '@qoollo/extensions/popover';

import { PopoverDemoComponent } from './popover-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: PopoverDemoComponent }]),
    MtxPopoverModule,
  ],
  declarations: [PopoverDemoComponent],
})
export class PopoverDemoModule {}
