import React from 'react'
import './WarningMessage.scss'
import { CiWarning } from "react-icons/ci";

function WarningMessage() {
    return (
        <div className='WarningMessage'>
            <div className="WarningMessage__msgTop">
                <div className="WarningMessage__txt-Box">
                    <h2 className="WarningMessage__txt">
                        Message from Webpage !
                    </h2>
                </div>
            </div>
            <div className="WarningMessage__msgBottom">
                <div className="WarningMessage__txtDesc-Box">
                    <div className="warning-icon">
                        <CiWarning className="icon" />
                    </div>
                    <p className="WarningMessage__txtDesc">WARNING :</p>
                </div>
                <div className="WarningMessage__action-Box">
                    <p className="actionTxt">OK</p>
                </div>
            </div>
        </div>
    )
}

export default WarningMessage