import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import { movieAdded } from "./queueSlice";
import ConfirmAdd from "../../ConfirmAdd";

export const AddToQueue = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const onAddToQueueClicked = (event) => {
        //Add To Queue
        dispatch(movieAdded({
            title: props.title, 
            rating: props.rating, 
            image: props.image
        }))
        
        setIsModalVisible(true);
    }

    const onHandleDismissModal = () => {
        setIsModalVisible(false);
    }

    return (
        <>
        <button className="button go-back" type="button" onClick={onAddToQueueClicked}>Add To Queue</button>
        {isModalVisible && <ConfirmAdd dismissModal = {onHandleDismissModal} />}
        </>
    )
}