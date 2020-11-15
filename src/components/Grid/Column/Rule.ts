import { Rule } from "../../../base/Rules/Rule";
import { INode } from "../../../designer/Core/Node/INode";
import { IField } from "../../../base/Rules/IRule";
import OptionSelect from "designer/Attrebutebox/Inputs/OptionSelect";
const sizeSchema = {
  'false':false,
  'auto':'auto',
  'true':true,
  '1' : 1,
  '2': 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6,
  '7' : 7,
  '8' : 8,
  '9' : 9,
  '10' : 10,
  '11' : 11,
  '12' : 12,
}

const colWidthOptions = [
  {
    name:'xl',
    label:'xl',
    input:OptionSelect,
    schema:sizeSchema,
  },
  {
    name:'lg',
    label:'lg',
    input:OptionSelect,
    schema:sizeSchema,
  },
  {
    name:'md',
    label:'md',
    input:OptionSelect,
    schema:sizeSchema,
  },
  {
    name:'sm',
    label:'sm',
    input:OptionSelect,
    schema:sizeSchema,
  },

  {
    name:'xs',
    label:'xs',
    input:OptionSelect,
    schema:sizeSchema,
  },

]

export class GridColumnRule extends Rule{
  editPaddingY = '16px';
  editPaddingX = '16px';
  labelKey ="column";

  accept(child:INode){
    if(child.meta.name === 'GridColumn'){
      return false;
    }
   /*
    if(child.rule instanceof GridContainerRule){
      return true;
    }
    if(child.rule instanceof CardRule){
      return true;
    }    
    if(child.rule instanceof FormFieldRule){
      return true;
    }

    if(child.rule instanceof PortletRule){
      return true;
    }    */
    return true;
  }
  
  getFields(): Array<IField>{
    return [
      ...colWidthOptions
    ]
  }
  
}

export {colWidthOptions}