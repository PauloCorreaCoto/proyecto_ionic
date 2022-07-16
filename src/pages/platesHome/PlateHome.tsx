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
    IonInput
} from "@ionic/react"
import UseApi from "../../components/UseApi";
import "./PlateHome.css";
import DeletePlateForm from "../../components/plateForms/DeletePlateForm";
import PlatePutForm from "../../components/plateForms/PlatePutForm";
import PlatePostForm from "../../components/plateForms/PlatePostForm";



const PlateHome: React.FC = () => {
    const {data, refetch} = UseApi(`${process.env.REACT_APP_API_URL}/plates`);

    if(!data){
        return <h1>Cargando...</h1>
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
                    <PlatePostForm />
                <IonCardTitle> Editar </IonCardTitle>
                    <PlatePutForm />                
                <IonCardTitle> Delete </IonCardTitle>
                    <DeletePlateForm />
            <IonContent>
                {data?.map((plate: any) => {
                    return (
                        <IonCard className="Joke_Color" key={plate.id}>
                        <IonCardHeader>
                            <IonCardSubtitle className="Joke_Category">Nombre: {plate?.name} | Price: {plate?.price} | Plato ID: {plate?.id}</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    )
                })}

            </IonContent>


        </IonPage>
        )
    }

};

export default PlateHome;