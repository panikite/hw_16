import React from 'react';


const Contact = ({firstName,lastName,phone,gender, icon}) => {
    return (
        <div className="contact">
            <div className="contact_name">
                <span className="contact_lastname"> {lastName} </span>
                <span className="contact_firstname"> {firstName} </span>
            </div>
            <span className="contact_phone"> {phone} </span>
            {/* <span> {gender} </span> */}
            <img src = {icon} className="gender_icon" />
        </div>
    )
}



export default Contact;