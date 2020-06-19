import React from 'react';
import './index.css'
function Confirm(props) {
    const { text, cacleText, confirmText, cacle, confirm } = props.data
    return (
        <div onClick={cacle} className="confirm-wrap">
            <div className="contianer">
                <div className="text">{text}</div>
                <div className="option">
                    <div onClick={cacle} className="cacle">{cacleText}</div>
                    <div onClick={confirm} className="confirm">{confirmText}</div>
                </div>
            </div>
        </div>
    )
}

export default Confirm