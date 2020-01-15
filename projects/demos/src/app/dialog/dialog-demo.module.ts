import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { MtxDialogModule } from '@ng-matero/extensions/dialog';
import { DialogDemoComponent } from './dialog-demo.component';
import { DialogOverviewComponent } from './dialog-demo.component';

@NgModule({
  imports: [
    MatButtonModule,
    MtxDialogModule,
    RouterModule.forChild([{ path: '', component: DialogDemoComponent }]),
  ],
  declarations: [DialogDemoComponent, DialogOverviewComponent],
  entryComponents: [DialogOverviewComponent],
})
export class DialogDemoModule {}