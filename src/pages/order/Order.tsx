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
import "./Order.css";
import DeleteForm from "../../components/DeleteForm"
import PutForm from "../../components/PutForm";
import PostForm from "../../components/PostForm";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import PlateHome from "../platesHome/PlateHome";



const Order: React.FC = () => {
    const {data, refetch} = UseApi(`${process.env.REACT_APP_API_URL}/orders`);

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

            <IonContent>
                
                {data?.map((order: any) => {
                    return  (

                        <IonCard className="Joke_Color" key={order.id}>
                        <IonCardHeader>
                            <IonCardSubtitle className="Joke_Category">Fecha orden: {order?.order_date} | Status: {order?.status} | Orden ID: {order?.id}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    )
                })}
            

            </IonContent>
    


        </IonPage>
        )
    }

};

export default Order;