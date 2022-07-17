import React from "react";
import {
    IonPage, //para especiifcar que es una pagina
    IonHeader, //parte de arriba
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
                        Ejemplo Ionic
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
                <IonCardTitle> Post </IonCardTitle>                
                    <PostForm />
                <IonCardTitle> Update </IonCardTitle>
                    <PutForm />                
                <IonCardTitle> Delete </IonCardTitle>
                    <DeleteForm />

            <IonContent>
                {data?.map((client: any) => {
                    return (
                        <IonCard className="Joke_Color" key={client.id}>
                        <IonCardHeader>
                            <IonCardSubtitle className="Joke_Category">Nombre: {client?.name} | Email: {client?.email} | Password: {client?.password} | Direction: {client?.direction} | Cliente ID: {client?.id}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    )
                })}
            

            </IonContent>


        </IonPage>
        )
    }

};

export default Client;