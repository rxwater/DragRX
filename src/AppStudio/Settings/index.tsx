import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import intl from 'react-intl-universal';
import { useAppStudioStore } from 'AppStudio/AppStudioStore';
import { stringValue } from 'rx-drag/utils/stringValue';
import SubmitButton from 'Components/common/SubmitButton';
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_RX_APP } from 'Base/GraphQL/APP_GQLs';
import { useShowAppoloError } from 'Store/Helpers/useInfoError';
import { useDragItStore } from 'Store/Helpers/useDragItStore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      padding: theme.spacing(2),
      width:'300px',
    },
    actions:{
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
    },
    saveButton:{
      marginLeft:theme.spacing(1),
    }
  }),
);


export const Settings = observer((
  props:{
    onClose?:()=>void
  }
) => {
  const {onClose} = props;
  const classes = useStyles();
  const studioStore = useAppStudioStore();
  const rxApp = studioStore?.rxApp;
  const dragItStore = useDragItStore();

  const [name, setName] = useState(rxApp?.name);
  const [appType, setAppType] = useState(rxApp?.app_type);
  const [icon, setIcon] = useState(rxApp?.icon);
  const [color, setColor] = useState(rxApp?.color);
  const [entryPageId, setEntryPageId] = useState(rxApp?.entry_page_id);
  const [excuteSave, {loading, error}] = useMutation(SAVE_RX_APP,{
    onCompleted(){
      onClose && onClose();
      dragItStore.setSuccessAlert(true)
    }
  });

  useShowAppoloError(error);

  const handleCancel = ()=>{
    onClose && onClose();
    setName(rxApp?.name);
    setAppType(rxApp?.app_type);
    setIcon(rxApp?.icon);
    setColor(rxApp?.color);
    setEntryPageId(rxApp?.entry_page_id);
  }

  const handleSave = ()=>{
    excuteSave({variables:{
      rxApp:{
        id:rxApp?.id,
        name,
        app_type:appType,
        icon,
        color,
        entry_page_id:entryPageId
      }
    }})
  }

  return (
    <div className = {classes.root}>
      <Grid container spacing = {2}>
        <Grid item xs = {12}>
          <TextField 
            fullWidth 
            variant = "outlined" 
            label = {intl.get('name')} 
            size = "small"
            value = {stringValue(name)}
            onChange = {(e)=>setName(e.target.value as string)}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField 
            fullWidth 
            variant = "outlined" 
            label = {intl.get('type')} 
            size = "small"
            value = {stringValue(appType)}
            onChange = {(e)=>setAppType(e.target.value as string)}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField 
            fullWidth 
            variant = "outlined" 
            label = {intl.get('icon')} 
            size = "small"
            value = {stringValue(icon)}
            onChange = {(e)=>setIcon(e.target.value as string)}
          />
        </Grid>
        <Grid item xs = {12}>
          <TextField 
            fullWidth 
            variant = "outlined" 
            label = {intl.get('color')} 
            size = "small"
            value = {stringValue(color)}
            onChange = {(e)=>setColor(e.target.value as string)}
          />
        </Grid>
        <Grid item xs = {12}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel>{intl.get("entry-page")}</InputLabel>
            <Select
              label = {intl.get("entry-page")}
              value={entryPageId || ''}
              onChange={(e)=>setEntryPageId(e.target.value as string)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                studioStore?.rxApp?.pages?.map(page=>{
                  return(
                    <MenuItem key = {page.id} value={page.id}>{page.name}</MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>  

        </Grid>
        <Grid item className = {classes.actions} xs = {12}>
          <Button 
            variant = 'outlined'
            onClick = {handleCancel}
          >{intl.get('cancel')}</Button>
          <SubmitButton 
            className = {classes.saveButton} 
            variant = 'contained' 
            color = 'primary'
            submitting = {loading}
            onClick = {handleSave}
          >
            {intl.get('save')}
          </SubmitButton>
        </Grid>

      </Grid>
    </div>
  );
})
