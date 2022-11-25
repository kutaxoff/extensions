import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxLoaderModule } from '@erengee/extensions/loader';

import { LoaderDemoComponent } from './loader-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoaderDemoComponent }]),
    MtxLoaderModule,
  ],
  declarations: [LoaderDemoComponent],
})
export class LoaderDemoModule {}
