import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxPopoverModule } from '@erengee/extensions/popover';

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
