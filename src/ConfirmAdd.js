import React from "react";
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const ConfirmAdd = (props) => {
    const navigate = useNavigate();
    const rootModalNode = document.getElementById('root-modal');

    const onViewQueueClicked = () => {
        navigate("../view-q-page")
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <h1>Movie Added to Queue</h1>
            <h3>View Queue?</h3>
            <button onClick={onViewQueueClicked} className="button go-back">View Queue</button>
            <button onClick={()=>props.dismissModal()} className="button go-back">Go Back</button>
        </div>,
        rootModalNode
    );
};

export default ConfirmAdd;