import React, {useState, useEffect} from 'react';
import MapEvent from '../MapEvent';
import FormData from './FormData';
import FormPhoto from './FormPhoto';
import Denuncia from '../Denuncia'
import { Alert, AlertTitle } from '@material-ui/lab';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useUser } from 'reactfire';
import complaintHttpClient from '../../services/Api/complaint.httpClient'

const FormDenuncia = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [form, setform] = useState('');
    const [latlng, setlatlng] = useState({latlng: {
                                                    lat: -31.413500,
                                                    lng: -64.181050
                                                }});
    const [tipoObra, settipoObra] = useState(15);
    const [causa, setcausa] = useState('');
    const [photoURL, setphotoURL] = useState('');
    
    const user = useUser();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    //  //Lea los datos del formulario
    //  const handleChangeState = e => {
    //      console.log(denuncia)
    //      dispatch({
    //         [e.target.name]: e.target.value
    //     });
    //     console.log(`cambio: ${e.target.name} a ${e.target.value}`)
    // }

    // const handleChangeLocation = e  => {
    //     setdenuncia({
    //         ...denuncia,
    //         "latlng": e.latlng
    //     });
    // }

    // const handleChangePhoto = e  => {
    //     setdenuncia({
    //         ...denuncia,
    //         "photoUrl": e
    //     });
    // }

    const handleChangePhoto = e => {
        setphotoURL(e);
    }

    const handleChangeLocation = (latlng, adress )=> {
        setlatlng({'latlng': latlng.latlng, 
                    adress});
    }

    const handleChangeCausa = e => {
        setcausa(e.target.value);
    }

    const handleSelected = e => {
        settipoObra(e.target.value);
    }


    useEffect(()=>{
        
            if(activeStep === 0){
                setform(<MapEvent handleChangeLocation={handleChangeLocation}/>)
            }
            if(activeStep === 1){
                setform(<FormData handleChangeCausa={handleChangeCausa} handleSelected={handleSelected}/>)
            }
            if(activeStep === 2){
                setform(<FormPhoto handleChangePhoto={handleChangePhoto}/>);
            }
            if(activeStep === 3){
                setform(<Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            This is a success alert — <strong>check it out!</strong>
                        </Alert>);
                const denun =
                    {'description': causa,
                    'address': latlng.adress,
                    'lat': latlng.latlng.lat,
                    'lng': latlng.latlng.lng,
                    'photoURL': photoURL,
                    'idType': tipoObra,
                    'idUser': user.uid
                    };
                submit(denun);
            }
    },[activeStep]);

    const submit = async (denun) => {
        complaintHttpClient.post(denun);
        setTimeout(()=>{
            setform(<Denuncia dataDenuncia={denun}/>);
        },1500);
    }

    return (
            <div className='form'>
                {form}
                <div className='progress'>
                    <MobileStepper
                    position='static'
                    variant="progress"
                    steps={4}
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
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



        