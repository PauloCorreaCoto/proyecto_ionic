import React, { useState } from "react";
import {
    IonButton,
    IonCardHeader,

} from "@ionic/react";

import "../pages/client/Client.css";
import UseApi from "../UseApi";


const DeleteData: React.FC = () => {
    const {data, deleteData} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);
    const [id, setId] = useState("");

    const handleDelete = () => {
        deleteData(`${id}`)
        setId("");
    }
    return(
        <IonCardHeader>
            <form onSubmit={handleDelete} >

                <input 
                className="Inputs"
                type="text"
                value={id}
                placeholder= "Id del cliente"
                onChange={(e) => setId(e.target.value)}
                />                                

                <IonButton type="submit" color="danger">Eliimnar</IonButton>

            </form>
        </IonCardHeader>
    )
}

export default DeleteData;