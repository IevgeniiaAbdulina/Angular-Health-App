import { CustomFormControl } from "./contact-form";

export class MessageField implements CustomFormControl {
  name = 'message';
  id = 'message';
  type = 'text';
  placeholder = 'Wpisz swoją wiadomość...';
  label = 'Wiadomość';
  errorMessage =  [
    {
      type: 'maxlength',
      message: 'Wiadomość jest za długa.'
    }
  ];
  typeField = 'textarea';
  fieldID = 4;
}
