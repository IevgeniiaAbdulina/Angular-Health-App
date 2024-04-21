export interface ContactFormFields {
  [key: string]: CustomFormControl;
}

export interface CustomFormControl {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: ErrorMessage[];
  typeField: string;
  fieldID: number;
}

interface ErrorMessage {
  type: string;
  message: string;
}
