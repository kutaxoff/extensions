import { Component } from '@angular/core';
import { ColorFormat } from '@erengee/extensions/colorpicker';

@Component({
  selector: 'color-picker-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = '#3f51b5';
  format: ColorFormat = 'hex';
}
