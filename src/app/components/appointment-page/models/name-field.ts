import { CustomFormControl } from './contact-form';

export class NameField implements CustomFormControl {
  name = 'name';
  id = 'name';
  type = 'text';
  placeholder = 'Wpisz swoje imię i nazwisko';
  label = 'Imię i nazwisko';
  errorMessage = [
    {
      type: 'required',
      message: 'Imię i nazwisko jest wymagane.'
    },
    {
      type: 'minlength',
      message: 'Imię i nazwisko musi mieć co najmniej 4 znaki.'
    },
    {
      type: 'pattern',
      message: 'Imię i nazwisko powinno zawierać wyłącznie litery.'
    }
  ];
  typeField = 'input';
  fieldID = 1;
}
