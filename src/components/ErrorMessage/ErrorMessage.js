import React from 'react'
import './ErrorMessage.scss'
import { MdErrorOutline } from "react-icons/md";

function ErrorMessage() {
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

                    <p className="ErrorMessage__txtDesc">Message Sent successFully </p>
                </div>
                <div className="ErrorMessage__action-Box">
                    <p className="actionTxt">OK</p>
                </div>

            </div>
        </div>
    )
}

export default ErrorMessage