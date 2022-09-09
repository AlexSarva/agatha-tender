import '../styles/User.css';
import '../styles/Button.css'
import {useEffect, useState} from 'react';
import {firstLetter} from '../utils/constants';

function User(props) {

    const [initial, setInitial] = useState('');

    useEffect(()=> {
        const letter = firstLetter(props.userName);
        setInitial(letter);
    },[props.userName])

    return (
        <div className="user">
            <div className="user__avatar">
                <span className="user__initial">{initial}</span>
            </div>
            <div className="user__container">
                <p className="user__name">{props.userName}</p>
                <button onClick={props.onLoginOut} type="button" className="user__exit-btn button"
                        value="Выйти" name="exit-btn">Выйти
                </button>
            </div>
        </div>
    )
}

export default User;