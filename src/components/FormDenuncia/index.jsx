import React, {useState, useEffect} from 'react';
import { useUser } from 'reactfire';
import MapEvent from '../MapEvent';
import FormData from './FormData';
import FormPhoto from './FormPhoto';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useTheme } from '@material-ui/core/styles';
import { MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import complaintHttpClient from '../../services/Api/complaint.httpClient';
import { useLocation } from 'wouter';

const FormDenuncia = () => {
    const user = useUser();
    const usuario = user !== null ? user.uid : null;   
    const theme = useTheme();
    const [, pushLocation] = useLocation();
    const [validate, setValidate] = useState(false)
    const [activeStep, setActiveStep] = useState(0);
    const [form, setform] = useState('');                                          
    const [newComplaint, setNewComplaint] = useState({  'description': '',
                                                        'address': '',
                                                        'lat': -31.413500,
                                                        'lng': -64.181050,
                                                        'photoURL': '',
                                                        'idType': 0,
                                                        'idUser': usuario
                                                        });
      //Lee los datos del formulario
     const handleChangeState = e => {
        e.persist()
        setNewComplaint(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleChangePhoto = photo  => {
        setNewComplaint(prevState => ({
            ...prevState,
            'photoURL': photo
        }));
    }

    const handleChangeLocation = (latlng, address )=> {
        setNewComplaint(prevState => ({
            ...prevState,
            'address': address,
            'lat': latlng.latlng.lat,
            'lng': latlng.latlng.lng,
        }));
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    
    useEffect(()=>{
        console.log('useEffect')
            if(activeStep === 0){
                setValidate(false);
                setform(<MapEvent handleChangeLocation={handleChangeLocation} setValidate={setValidate}/>)
            }
            if(activeStep === 1){
                setValidate(false);
                setform(<FormData handleChangeState={handleChangeState} setValidate={setValidate}/>)
            }
            if(activeStep === 2){
                setform(<FormPhoto handleChangePhoto={handleChangePhoto}/>);
            }
            if(activeStep === 3){
                setform(<Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>);
                submit();
            }
    },[activeStep]);

    const submit = () => {
        complaintHttpClient.post(newComplaint);
        setTimeout(()=>{
            pushLocation('/')
        },1300);
    }

    const toValidate = (e) => {

    }

    return (
            <div className='form'>
                {form}
                {console.log(validate)}
                <div className='form__progress'>
                    <MobileStepper
                    position='static'
                    variant="progress"
                    steps={4}
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === 3 || !validate}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0 || activeStep === 3}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
                </div>
        </div>

    )
}

export default FormDenuncia;



        