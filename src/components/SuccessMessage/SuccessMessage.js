import React from 'react'
import './SuccessMessage.scss'
import { FaRegCircleCheck } from "react-icons/fa6";

function SuccessMessage({ message, buttonText, onButtonClick }) {
    return (
        <div className='SuccessMessage'>
            <div className="SuccessMessage__msgTop">
                <div className="SuccessMessage__txt-Box">
                    <h2 className="SuccessMessage__txt">
                        Success !
                    </h2>
                </div>
            </div>

            <div className="SuccessMessage__icon-Box">
                <FaRegCircleCheck className="SuccessMessage__icon" />
            </div>

            <div className="SuccessMessage__msgBottom">

                <div className="SuccessMessage__txtDesc-Box">

                    <p className="SuccessMessage__txtDesc">{message}</p>
                </div>
                <div className="SuccessMessage__action-Box">
                    <p className="actionTxt" onClick={onButtonClick}>{buttonText}</p>
                </div>

            </div>
        </div>
    )
}

export default SuccessMessage