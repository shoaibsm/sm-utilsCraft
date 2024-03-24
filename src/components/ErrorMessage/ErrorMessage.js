import React from 'react'
import './ErrorMessage.scss'
import { MdErrorOutline } from "react-icons/md";

function ErrorMessage({ message, buttonText, onButtonClick }) {
    return (
        <div className='ErrorMessage'>
            <div className="ErrorMessage__msgTop">
                <div className="ErrorMessage__txt-Box">
                    <h2 className="ErrorMessage__txt">
                        Error !
                    </h2>
                </div>
            </div>

            <div className="ErrorMessage__icon-Box">
                <MdErrorOutline className="ErrorMessage__icon" />
            </div>

            <div className="ErrorMessage__msgBottom">

                <div className="ErrorMessage__txtDesc-Box">

                    <p className="ErrorMessage__txtDesc">{message} </p>
                </div>
                <div className="ErrorMessage__action-Box">
                    <button className="actionTxt" onClick={onButtonClick}>{buttonText}</button>
                </div>

            </div>
        </div>
    )
}

export default ErrorMessage