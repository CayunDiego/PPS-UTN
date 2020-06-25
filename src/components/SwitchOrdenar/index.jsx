import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchOrdenar = ({checked, setChecked}) => {

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (

    <div className='switch'>
      <p className='switch__text'>Ordenar por votos</p>
      <FormControlLabel
        control={
          <Switch
          className='switch__check'
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
      />

    </div>
  );
}

export default SwitchOrdenar;