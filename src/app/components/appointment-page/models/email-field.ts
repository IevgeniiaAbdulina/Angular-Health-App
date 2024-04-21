import { CustomFormControl } from "./contact-form";

export class EmailField implements CustomFormControl {
  name = 'email';
  id = 'email';
  type = 'email';
  placeholder = 'Wprowadź adres e-mail';
  label = 'Adres e-mail';
  errorMessage = [
    {
      type: 'required',
      message: 'E-mail jest wymagany.'
    },
    {
      type: 'email',
      message: 'Adres e-mail powinien zawierać @.'
    }
  ];
  typeField = 'input';
  fieldID = 2;
}
