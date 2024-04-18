export interface ContactFormFields {
  name: CustomFormControl;
  email: CustomFormControl;
  phone: CustomFormControl;
  message: CustomFormControl;
}

export interface CustomFormControl {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: ErrorMessage[]
}

interface ErrorMessage {
  type: string;
  message: string;
}
