import React from 'react'
import './DeleteMessage.scss'
import { IoCloseCircleOutline } from "react-icons/io5";

function DeleteMessage() {
    return (
        <div className='DeleteMessage'>
            <div className="DeleteMessage__msgTop">
                <div className="DeleteMessage__txt-Box">
                    <h2 className="DeleteMessage__txt">
                        Error !
                    </h2>
                </div>
            </div>

            <div className="DeleteMessage__icon-Box">
                <IoCloseCircleOutline className="DeleteMessage__icon" />

            </div>

            <div className="DeleteMessage__msgBottom">

                <div className="DeleteMessage__txtDesc-Box">

                    <p className="DeleteMessage__txtDesc">Some thing went wrong</p>
                </div>
                <div className="DeleteMessage__action-Box">
                    <p className="actionTxt">Close</p>
                </div>

            </div>
        </div>
    )
}

export default DeleteMessage