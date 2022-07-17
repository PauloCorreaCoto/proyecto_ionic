import React, { useContext, useEffect, useState } from "react";
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
import "../pages/client/Client.css";


    const PostData: React.FC = () => {
        const {refetch} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [direction, setDirection] = useState("");
        const { navigate } = useContext(NavContext);
        const handleSubmit = () => {
            try {
                refetch({name: name, email: email,password: password, direction: direction})
                setName("");
                setEmail("");
                setPassword("");
                setDirection("");
            } catch (error) {
                console.log(error);
            }
            navigate('/login')            
        }

        return(
            <IonCardHeader>
                <form onSubmit={handleSubmit} >
    
                    <input 
                    className="Movie_Inputs"
                    type="text"
                    value={name}
                    placeholder= "Nombre del cliente"
                    onChange={(e) => setName(e.target.value)}
                    />
                        
                    <input 
                    className="Movie_Inputs"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
    
                    <input 
                    className="Movie_Inputs"
                    type="text"
                    placeholder="Password"                
                    onChange={(e) => setPassword(e.target.value)}                
                    />

                    <input 
                    className="Movie_Inputs"
                    type="text"
                    placeholder="Direction"                
                    onChange={(e) => setDirection(e.target.value)}                
                    />
    
                    <IonButton type="submit"> Register</IonButton>
    
                </form>
            </IonCardHeader>
           )
        }

        
    
    export default PostData;