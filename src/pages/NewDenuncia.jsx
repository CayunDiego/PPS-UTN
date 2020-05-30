import React from 'react';
import Layout from './Layout'
import FormDenuncia from '../components/FormDenuncia'

// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import StepContent from '@material-ui/core/StepContent';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';



const NewDenuncia = () => {  
    return (
      <Layout>
          <FormDenuncia/>
      </Layout>
    )
}

export default NewDenuncia