# Checkbox Group

## API reference for Material Extensions checkbox-group

`import { MtxCheckboxGroupModule } from '@qoollo/extensions/checkbox-group';`

### Directives

#### `MtxCheckboxGroup`

Selector: `[mtx-checkbox-group]`

Exported as: `mtxCheckboxGroup`

##### Properties

| Name | Description |
| :--- | :--- |
| `@Input()`<br>`items: any[]` | Items array. |
| `@Input()`<br>`bindLabel: string` | Object property to use for label. Default is **`'label'`**. |
| `@Input()`<br>`bindValue: string` | Object property to use for selected model. By default binds to whole object. Default is **`'value'`**. |
| `@Input()`<br>`compareWith: (a: any, b: any) => boolean` | A function to compare the option values with the selected values. The first argument is a value from an option. The second is a value from the selection(model). A boolean should be returned. |
| `@Input()`<br>`showSelectAll: boolean` | Whether show select all. Default is **`true`**. |
| `@Input()`<br>`selectAllLabel: string` | The lable of select all. Default is **`'Select All'`**. |
| `@Output()`<br>`change: EventEmitter<{  model: MtxCheckboxGroupOption[];  index: number; }>()` | Event emitted when the selection changed. |

### Interfaces

#### `MtxCheckboxGroupOption`

```ts
interface MtxCheckboxGroupOption {
  ariaDescribedby?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  label?: any;
  value?: any;
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  indeterminate?: boolean;
  labelPosition?: 'before' | 'after';
  id?: string;
  name?: string | null;
  required?: boolean;
  [k: string]: any;
}
```

