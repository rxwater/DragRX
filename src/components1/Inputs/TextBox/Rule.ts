import { IMeta } from "base1/Model/IMeta";
import { IProp } from "base1/Model/IProp";
import BooleanInput from "base1/PropsInputs/BooleanInput";
import NumberInput from "base1/PropsInputs/NumberInput";
import OptionSelect from "base1/PropsInputs/OptionSelect";
import StringInput from "base1/PropsInputs/StringInput";
import inputRules from "base1/Rules/inputRules";
import { Rule } from "base1/Rules/Rule";

export class TextBoxRule extends Rule{
  editPaddingY = '';
  editPaddingX = '';
  empertyPadding = '';
  hasField = true;
  hasValidation = true;

  accept(child:IMeta){
    return false;
  }

  getFields(): Array<IProp>{
    return [
      ...inputRules,
      {
        name:'type',
        label:'type',
        input:OptionSelect,
        props:{
          items:[
            {
              value:'date',
              label:'date'
            },
            {
              value:'datetime-local',
              label:'datetime-local'
            },
            {
              value:'email',
              label:'email'
            },
            {
              value:'month',
              label:'month'
            },
            {
              value:'number',
              label:'number'
            },
            {
              value:'password',
              label:'password'
            },
            {
              value:'search',
              label:'search'
            },
            {
              value:'tel',
              label:'tel'
            },
            {
              value:'text',
              label:'text'
            },
            {
              value:'time',
              label:'time'
            },
            {
              value:'url',
              label:'url'
            },
            {
              value:'week',
              label:'week'
            },
            {
              value:'color',
              label:'color'
            },            
          ]
        },
      },
      {
        name:'shrinkLabel',
        label:'shrink-label',
        input:BooleanInput,
      },
      {
        name:'size',
        label:'size',
        input:OptionSelect,
        props:{
          items:[
            {
              value:'medium',
              label:'Medium'
            },
            {
              value:'small',
              label:'Small'
            },
          ]
        },
      },
      {
        name:'multiline',
        label:'multiline',
        input:BooleanInput,
      },
      {
        name:'rows',
        label:'rows',
        input:NumberInput,
        props:{
          min:1,
        }
      },
      {
        name:'helperText',
        label:'helper-text',
        xs:12,
        input:StringInput,
      }
    ]
  }

}