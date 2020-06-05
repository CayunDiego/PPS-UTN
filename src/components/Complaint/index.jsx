import React from 'react';
import './complaint.css';
import moment from 'moment';
import 'moment/locale/es';
import { Link } from 'wouter';
import UserPhoto from '../UserPhoto';
import IconButton from '@material-ui/core/IconButton';
import HowToRegIcon from '@material-ui/icons/HowToReg';


const Complaint = ({complaint, children}) => {
    const {CREATE_AT, DESCRIPTION, ADDRESS, PHOTO_URL, VOTE, TYPE_WORK, USER} = complaint;
    moment.locale('es');
    const date = moment(CREATE_AT).fromNow();

    return (
        <div className='CardComplaint'>
            <Link to={`/denuncia/${complaint.ID}`} key={complaint.ID} className='Link'>
                <div className='CardHeader'>
                    <UserPhoto tamanio='card' userData={USER} type='complaint'/>
                    <div className='DataHeader'>
                        <p className='title'>{USER ? USER.DISPLAY_NAME : 'Usuario Sin Registrar'}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='CardMedia'>
                    <img src={PHOTO_URL} alt="PHOTO_URL"/>
                </div>
                <div className='CardContent'>
                    <p className='address'>{ADDRESS}</p>
                    <p><span className='title'>{TYPE_WORK.TYPE}: </span>{DESCRIPTION}</p>
                </div>
            </Link>
            <div className='CardActions'>
                <p>Votos: {VOTE}</p>
                <IconButton aria-label="add to favorites">
                    <HowToRegIcon color='secondary'/>
                </IconButton>
            </div>
            <div className='CardComment'>
                {children}
            </div>
        </div>
    )
}

export default Complaint;
