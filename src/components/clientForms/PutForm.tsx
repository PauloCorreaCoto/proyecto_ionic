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
import UseApi from "../UseApi";



const PutForm: React.FC = () => {
    const { data, UpdateData } = UseApi(`${process.env.REACT_APP_API_URL}/clients`); 
    const { navigate } = useContext(NavContext); 

    const [nameEdit, setNameEdit] = useState("");
    const [directionEdit, setDirecitonEdit] = useState("");
    const [passwordEdit, setPasswordEdit] = useState("");

    const handleEdit = () => {
        UpdateData(`${localStorage.getItem("apiData")}`, {name: nameEdit});
        UpdateData(`${localStorage.getItem("apiData")}`, {direction: directionEdit});
        UpdateData(`${localStorage.getItem("apiData")}`, {password: passwordEdit});
        setNameEdit("");
        setDirecitonEdit("");
        setPasswordEdit("");

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
                        placeholder="Client name"
                        onChange={(e) => setNameEdit(e.target.value)}                    
                    />

                <input
                        className="Movie_Inputs"
                        type="text"
                        value={directionEdit}
                        placeholder="Client direction"
                        onChange={(e) => setDirecitonEdit(e.target.value)}                    
                    />

                <input
                        className="Movie_Inputs"
                        type="password"
                        value={passwordEdit}
                        placeholder="Client password"
                        onChange={(e) => setPasswordEdit(e.target.value)}                    
                    />
    
                    <IonButton className="Joke_Refresh" color="success" type="submit"> Edit client </IonButton>
                </form>
            </IonCardHeader>
    
        )
    };


    
    export default PutForm;