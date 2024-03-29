import React, { useState } from "react";
import {
    IonButton,
    IonCardHeader,

} from "@ionic/react";
import UseApi from "../UseApi";
import "../../pages/client/App.css"
import moment from "moment";

const PostOrder: React.FC = () => {
    const {refetch} = UseApi(`${process.env.REACT_APP_API_URL}/orders`);
    const [clientID, setClientID] = useState<any>(localStorage.getItem("apiData"));
    const [plateID, setPlateID] = useState <any>();
    const [orderStatus, setOrderStatus] = useState <any>(2);
    const [date, setDate] = useState <any>(moment().format("YYYY-MM-DD")); 
    const handleSubmit = () => {
        try {
            refetch({client_id: clientID ,plate_id: plateID, status: orderStatus, order_date: date})
            setClientID("");
            setPlateID("");
            setOrderStatus("");
            setDate("")
  
        } catch (error) {
            console.log(error);
        }            
    }
    return(
        <IonCardHeader>
            <form onSubmit={handleSubmit} >

           {console.log()}
            <input 
                className="Inputs"
                type="int"
                value={plateID}
                placeholder= "Plate id"
                onChange={(e) => setPlateID(e.target.value)}
                />

                <IonButton type="submit">Add plate</IonButton>

            </form>
        </IonCardHeader>
       )
    }

    export default PostOrder;