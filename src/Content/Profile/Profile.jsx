import React from "react"; 
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.profile}>
    <img className={s.userpng} src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"/>
    {/* <div>Имя Фамилия</div> */}
    </div>
    
}

export default Profile;
