import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonTitle,
    IonContent,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
    IonCardHeader,
    IonLabel,
    IonInput,
    IonItem,
    IonFooter
} from "@ionic/react";
import UseApi from "./UseApi";
import "../pages/client/Client.css";


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
                className="Movie_Inputs"
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