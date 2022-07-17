import React from "react";
import {
    IonPage, 
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle,
    IonInput,
    IonLabel,
    IonTabBar,
    IonRouterOutlet,
    IonTabButton
} from "@ionic/react"
import UseApi from "../../components/UseApi";
import "./Client.css";
import DeleteForm from "../../components/DeleteForm"
import PutForm from "../../components/PutForm";
import PostForm from "../../components/PostForm";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import PlateHome from "../platesHome/PlateHome";

const Settings = () => <IonPage>Settings</IonPage>;


const Client: React.FC = () => {
    const {data, refetch} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);

    if(!data){
        return <h1>Loading...</h1>
    }else{
        return(    
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle> 
                        User sign up 
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonCardTitle> Create a client </IonCardTitle>                
                    <PostForm />
                <p style={{ fontSize: "30px" }}>
                  Go back to <a href="/Login">login</a>
              </p>
            </IonContent>
        </IonPage>
        )
    }

};

export default Client;