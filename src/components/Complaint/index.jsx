import React, {useState} from 'react';
import './complaint.css';
import moment from 'moment';
import 'moment/locale/es';
import { Link } from 'wouter';
import UserPhoto from '../UserPhoto';
import AlertState from '../AlertState';
import ButtonActionComplaint from '../ButtonActionComplaint'


const Complaint = ({complaint, children}) => {
    const {ID, CREATE_AT, DESCRIPTION, ADDRESS, PHOTO_URL, VOTE, TYPE_WORK, USER, STATE} = complaint;
    const [vote, setVote] = useState(VOTE);
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
                    <AlertState state={STATE}/>
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
                <p>Votos: {vote}</p>
                <ButtonActionComplaint userC={USER} id={ID} setVote={setVote}/>
            </div>
            <div className='CardComment'>
                {children}
            </div>
        </div>
    )
}

export default Complaint;
