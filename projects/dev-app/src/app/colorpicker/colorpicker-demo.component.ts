import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ColorFormat } from '@erengee/extensions/colorpicker';

@Component({
  selector: 'dev-colorpicker-demo',
  templateUrl: './colorpicker-demo.component.html',
  styleUrls: ['./colorpicker-demo.component.scss'],
})
export class ColorPickerDemoComponent {
  color = '#3f51b5';
  disabled = false;

  color2 = new UntypedFormControl({ value: '#3f51b5', disabled: true });

  color3 = new UntypedFormControl({ value: '#3f51b5', disabled: false });

  format: ColorFormat = 'hex';

  onColorChange(e: any) {
    console.log(e);
  }

  toggleDisabled(e: MatSlideToggleChange) {
    if (e.checked) {
      this.color2.disable();
    } else {
      this.color2.enable();
    }
  }
}
