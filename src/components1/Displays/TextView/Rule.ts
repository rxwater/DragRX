import { Rule } from "base1/Rules/Rule";
import { IProp } from "base1/Model/IProp";
import { IMeta } from "base1/Model/IMeta";

export class TextViewRule extends Rule{
  //empertyPadding = '';
  hasField = true;
  
  accept(child:IMeta){
    return false;
  }

  getFields(): Array<IProp>{
    return [
    ]
  }

}