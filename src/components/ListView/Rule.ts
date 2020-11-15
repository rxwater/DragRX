import { Rule } from "../../base/Rules/Rule";
import { INode } from "../../designer/Core/Node/INode";
import { IField } from "../../base/Rules/IRule";
import ListViewColumnsDialog from "designer/Attrebutebox/Inputs/ListViewColumnsDialog";
import ListViewFiltersDialog from "designer/Attrebutebox/Inputs/ListViewFiltersDialog";
import StringInput from "base/PropsInputs/StringInput";
import ListViewBatcthCommandDialog from "designer/Attrebutebox/Inputs/ListViewBatcthCommandDialog";
import ListViewRowCommandDialog from "designer/Attrebutebox/Inputs/ListViewRowCommandDialog";

export class ListViewRule extends Rule{
  empertyPadding = '';
  
  accept(child:INode){
    return false;
  }

  getFields(): Array<IField>{
    return [
      {
        name:'columns',
        label:'columns',
        input:ListViewColumnsDialog,
      },
      {
        name:'filters',
        label:'filters',
        input:ListViewFiltersDialog,
      },
      {
        name:'rowCommands',
        label:'row-actions',
        input:ListViewRowCommandDialog,
      },
      {
        name:'batchCommands',
        label:'batch-actions',
        input:ListViewBatcthCommandDialog,
      },
      {
        name:'rowsPerPageOptions',
        label:'pager-options',
        input:StringInput,
      },
      {
        name:'defalutRowsPerPage',
        label:'rows-per-page',
        input:StringInput,
      },
    ]
  }

}