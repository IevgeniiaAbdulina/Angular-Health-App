import { CustomFormControl } from "./contact-form";

export class PhoneField implements CustomFormControl {
  name = 'phone';
  id = 'phone';
  type = 'number';
  placeholder = 'Wpisz numer telefonu';
  label = 'Telefon komórkowy';
  errorMessage =  [
    {
      type: 'required',
      message: 'Numer telefonu jest wymagany.'
    },
    {
      type: 'minlength',
      message: 'Numer telefonu jest za krótki.'
    },
    {
      type: 'maxlength',
      message: 'Numer telefonu jest za długi.'
    }
  ];
  typeField = 'input';
  fieldID = 3;
}
