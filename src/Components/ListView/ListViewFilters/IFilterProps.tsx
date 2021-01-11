import { InputSize, InputVariant } from 'Components/Inputs/InputPropTypes';


export interface IFilterProps {
  id:string;
  variant?: InputVariant;
  label?: string;
  width?: string;
  size?: InputSize;
  withoutAll?: boolean;
  helperText?: string;
  style?:any,
}