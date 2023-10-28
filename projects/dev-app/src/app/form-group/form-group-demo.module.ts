import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { MtxFormGroupModule } from '@erengee/extensions/form-group';
import { MtxSelectModule } from '@erengee/extensions/select';

import { FormGroupDemoComponent } from './form-group-demo.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: FormGroupDemoComponent }]),
    MtxFormGroupModule,
    MtxSelectModule,
  ],
  declarations: [FormGroupDemoComponent],
})
export class FormGroupDemoModule {}
