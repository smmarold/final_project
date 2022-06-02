import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { movieRemoved } from "./queueSlice";

export const RemoveFromQueue = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onRemoveClicked = (event) => {
        //remove from Queue
        
        dispatch(movieRemoved({
            title: props.title, 
            rating: props.rating, 
            image: props.image
        }))

        navigate("../view-q-page")
    }

    return (
        <button className="button go-back" type="button" onClick={onRemoveClicked}>Remove</button>
    )
}