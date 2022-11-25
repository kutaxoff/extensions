import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MtxProgressModule } from '@erengee/extensions/progress';

import { ProgressDemoComponent } from './progress-demo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ProgressDemoComponent }]),
    MtxProgressModule,
  ],
  declarations: [ProgressDemoComponent],
})
export class ProgressDemoModule {}
