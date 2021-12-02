import React from "react"; 
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return <div className={s.dialogs}>
        <h1 className={s.h1}>Dialogs</h1>
        <ul className={s.user}>
            <li className={s.dialog}>Dima</li>
            <li className={s.dialog}>Mole</li>
            <li className={s.dialog}>Milika</li>
        </ul>
    </div>
    
}

export default Dialogs;