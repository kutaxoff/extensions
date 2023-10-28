import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxDialogModule } from '@qoollo/extensions/dialog';

import { DialogDemoComponent } from './dialog-demo.component';
import { DialogOverviewComponent } from './dialog-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DialogDemoComponent }]),
    MtxDialogModule,
  ],
  declarations: [DialogDemoComponent, DialogOverviewComponent],
})
export class DialogDemoModule {}
