import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchLabels = ({checked, setChecked}) => {

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Por Votos"
      />

    </FormGroup>
  );
}

export default SwitchLabels;