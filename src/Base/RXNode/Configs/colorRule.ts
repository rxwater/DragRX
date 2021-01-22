import { IPropConfig } from "Base/RXNode/IPropConfig";
import OptionSelect from "Design/PageEditor/AttrebuteBox/PropsInputs/OptionSelect";

const colorRule:IPropConfig =   {
  name:'color',
  label:'color',
  input:OptionSelect,
  props:{
    items:[
      {
        value:'default',
        label:'Default'
      },
      {
        value:'primary',
        label:'Primary'
      },
      {
        value:'secondary',
        label:'Secondary'
      },
    ]
  },
}

export default colorRule;