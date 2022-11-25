import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MtxPipesModule } from '@erengee/extensions/core';
import { MtxDialogComponent } from './dialog.component';
import { MtxDialog } from './dialog';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MtxPipesModule],
  exports: [MtxDialogComponent],
  declarations: [MtxDialogComponent],
  providers: [MtxDialog],
})
export class MtxDialogModule {}
