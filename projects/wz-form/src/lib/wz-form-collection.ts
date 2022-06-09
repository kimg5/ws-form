import { CheckBoxComponent } from './check-box/check-box.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { PasswordComponent } from './password/password.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SliderComponent } from './slider/slider.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { KnobComponent } from './knob/knob.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { EditorComponent } from './editor/editor.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ListboxComponent } from './listbox/listbox.component';

const WZ_FORM_MAP : Map<String,any> = new Map();
WZ_FORM_MAP.set('CHECKBOX',CheckBoxComponent);
WZ_FORM_MAP.set('DROPDOWN',DropDownComponent);
WZ_FORM_MAP.set('INPUTTEXT',InputTextComponent);
WZ_FORM_MAP.set('INPUTMASK',InputMaskComponent);
WZ_FORM_MAP.set('INPUTSWITCH',InputSwitchComponent);
WZ_FORM_MAP.set('INPUTTEXTAREA',InputTextareaComponent);
WZ_FORM_MAP.set('PASSWORD',PasswordComponent);
WZ_FORM_MAP.set('CALENDAR',CalendarComponent);
WZ_FORM_MAP.set('SLIDER',SliderComponent);
WZ_FORM_MAP.set('RATING',RatingComponent);
WZ_FORM_MAP.set('KNOB',KnobComponent);
WZ_FORM_MAP.set('RADIO',RadioComponent);
WZ_FORM_MAP.set('MULTISELECT',MultiselectComponent);
WZ_FORM_MAP.set('CHIPS',ChipsComponent);
WZ_FORM_MAP.set('COLORPICKER',ColorPickerComponent);
WZ_FORM_MAP.set('EDITOR',EditorComponent);
WZ_FORM_MAP.set('INPUTNUMBER',InputNumberComponent);
WZ_FORM_MAP.set('LISTBOX',ListboxComponent);

const WZ_FORM_ELEMENTS  = [
    CheckBoxComponent,
    DropDownComponent,
    InputTextComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextareaComponent,
    PasswordComponent,
    CalendarComponent,
    SliderComponent,
    RatingComponent,
    RadioComponent,
    MultiselectComponent,
    KnobComponent,
    ChipsComponent,
    ColorPickerComponent,
    EditorComponent,
    InputNumberComponent,
    ListboxComponent
];

export  {WZ_FORM_MAP,WZ_FORM_ELEMENTS}