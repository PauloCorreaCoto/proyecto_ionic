import React from "react";
import {
    IonPage, 
    IonContent
} from "@ionic/react"
import UseApi from "../../components/UseApi";
import PostForm from "../../components/clientForms/PostForm";


const Login: React.FC = () => {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);

    if(!data){
        return <h1>Loading...</h1>
    }else{
        return(    
        <IonPage>
            <IonContent>              
                    <PostForm />
            </IonContent>
        </IonPage>
        )
    }

};

export default Login;