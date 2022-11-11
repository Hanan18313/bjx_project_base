export interface KeyParams {
  [key: string]: any
}

export interface OptionsKey {
  key: string
  value: string | number
}

export interface IFormFieldProps {
  name: string,
  type?: string,
  formConfig?: KeyParams
  inputConfig?: KeyParams
  options?: OptionsKey[],
  [key: string]: any
}