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
import "./FrontPage.css";
import DeleteForm from "../../components/DeleteForm"
import PutForm from "../../components/PutForm";
import PostForm from "../../components/PostForm";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import PlateHome from "../platesHome/PlateHome";
import { useLocation } from 'react-router-dom';

const Settings = () => <IonPage>Settings</IonPage>;


const FrontPage: React.FC = () => {
    const location = useLocation();

        return(    
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle> 
                        Ejemplo Ionic
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonReactRouter>
                <IonRouterOutlet>
                <Route path="/PlateHome" exact={true}>
                <PlateHome />
                </Route>
                </IonRouterOutlet>
            
                <IonButton routerLink={'/PlateHome'}>PlateHome</IonButton>

  
            </IonReactRouter>
            <IonContent>
            

            </IonContent>


        </IonPage>
        )
    };

export default FrontPage;