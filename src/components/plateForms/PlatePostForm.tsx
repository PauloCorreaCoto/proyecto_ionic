import React, { useEffect, useState } from "react";
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
import UseApi from "../UseApi";
import "../../pages/platesHome/PlateHome.css";

const PostPlate: React.FC = () => {
    const {refetch} = UseApi(`${process.env.REACT_APP_API_URL}/plates`);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = () => {
        try {
            refetch({name: name,price: price})
            setName("");
            setPrice("");
  
        } catch (error) {
            console.log(error);
        }            
    }
    return(
        <IonCardHeader>
            <form onSubmit={handleSubmit} >

                <input 
                className="Movie_Inputs"
                type="text"
                value={name}
                placeholder= "Nombre del plato"
                onChange={(e) => setName(e.target.value)}
                />

                <input 
                className="Movie_Inputs"
                type="text"
                placeholder="Precio"                
                onChange={(e) => setPrice(e.target.value)}                
                />

                <IonButton type="submit">Agregar</IonButton>

            </form>
        </IonCardHeader>
       )
    }

    export default PostPlate;