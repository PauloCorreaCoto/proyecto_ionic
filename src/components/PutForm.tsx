import React, { useContext, useState } from "react";
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
    IonFooter,
    NavContext
} from "@ionic/react";
import UseApi from "./UseApi";


const PutForm: React.FC = () => {
    
    const [nameEdit, setNameEdit] = useState("");
    const { data, UpdateData } = UseApi(`${process.env.REACT_APP_API_URL}/clients`); 
    const { navigate } = useContext(NavContext); 

    const handleEdit = () => {
        UpdateData(`${localStorage.getItem("apiData")}`, {name: nameEdit});
        setNameEdit("");

        navigate("/dashboard/" + nameEdit)
    }
    return(
        <IonCardHeader>
            <br></br>
            <form onSubmit={handleEdit}>

                <input
                        className="Movie_Inputs"
                        type="text"
                        value={nameEdit}
                        placeholder="Nombre del cliente"
                        onChange={(e) => setNameEdit(e.target.value)}                    
                    />
    
                    <IonButton className="Joke_Refresh" color="success" type="submit"> Edit client </IonButton>
                </form>
            </IonCardHeader>
    
        )
    };


    
    export default PutForm;