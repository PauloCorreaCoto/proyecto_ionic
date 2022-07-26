import React, { useState } from "react";
import {
    IonButton,
    IonCardHeader,

} from "@ionic/react";
import UseApi from "../UseApi";
import "../../pages/client/App.css"


const PutFormPlates: React.FC = () => {
    
    const [nameEdit, setNameEdit] = useState("");
    const [idEdit, setIdEdit] = useState("");
    const { data, UpdateData } = UseApi(`${process.env.REACT_APP_API_URL}/plates`); ; 

    const handleEdit = () => {
        UpdateData(`${idEdit}`, {name: nameEdit});
        setNameEdit("");

    }
    return(
        <IonCardHeader>
            <br></br>
            <form onSubmit={handleEdit}>

                <input
                    className="Inputs"
                    type="text"
                    value={idEdit}
                    placeholder='Id del plato'
                    onChange={(e) => setIdEdit(e.target.value)}                   
                    />
                    
                    <input 
                        className="Inputs"
                        type="text"
                        value={nameEdit}
                        placeholder="Nombre del plato"
                        onChange={(e) => setNameEdit(e.target.value)}                    
                    />
    
                    <IonButton className="Refresh" color="success" type="submit"> Editar </IonButton>
                </form>
            </IonCardHeader>
    
        )
    };

    export default PutFormPlates;