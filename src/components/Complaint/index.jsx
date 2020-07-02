import React, {useState} from 'react';
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
        <div className='cardComplaint'>
            
            <Link to={`/denuncia/${complaint.ID}`} key={complaint.ID} className='Link'>
                <div className='cardComplaint__header'>
                    <UserPhoto tamanio='card' userData={USER} type='complaint'/>
                    <div className='cardComplaint__header__data'>
                        <p className='title'>{USER ? USER.DISPLAY_NAME : 'Usuario Sin Registrar'}</p>
                        <p>{date}</p>
                    </div>
                    <AlertState state={STATE}/>
                </div>
                <div className='cardComplaint__media'>
                    <img height='168' src={PHOTO_URL || './assets/no-image-available.jpg'} alt="PHOTO_URL"/>
                </div>
                <div className='cardComplaint__content'>
                    <small className='cardComplaint__content__address'>{ADDRESS}</small>
                    <p><span className='title'>{TYPE_WORK.TYPE}: </span>{DESCRIPTION}</p>
                </div>
            </Link>
            <div className='cardComplaint__actions'>
                <p>Votos: {vote}</p>
                <ButtonActionComplaint userC={USER} id={ID} setVote={setVote} state={STATE}/>
            </div>
            <div className='cardComplaint__comment'>
                {children}
            </div>
        </div>
    )
}

export default Complaint;
