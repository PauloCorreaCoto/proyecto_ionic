import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonCard, IonCardHeader, IonCardSubtitle, IonButton} from '@ionic/react';
import React, { useState } from 'react';
import { RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import UseApi from '../../components/UseApi';

import OrderPostForm from '../../components/orderForms/OrderPostForm';
import PutForm from '../../components/clientForms/PutForm';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}
  
const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const {data} = UseApi(`${process.env.REACT_APP_API_URL}/plates`);


  const [show,setShow]=useState(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
  <IonTitle>Client profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonGrid>
          <IonRow>
              <IonCol>
                  <h4>Welcome: {match.params.id}</h4>
                  <h4>Your id is:  {localStorage.getItem("apiData")}</h4>
                  <PutForm />
                  <IonItemDivider></IonItemDivider>
              </IonCol>
          </IonRow>
          <IonRow>
          </IonRow>
        </IonGrid>
        {data?.map((plate: any) => {
                    return (
                        <IonCard className="Color" key={plate.id}>
                        <IonCardHeader>
                            <IonCardSubtitle className="Plate"><p>Plate Id: {plate?.id}</p> Name: {plate?.name} - Price: {plate?.price} </IonCardSubtitle>   
                            <div className="App">
                            {  
                              show?<p><OrderPostForm  />Plate description: {plate?.description.body}</p>:null
                                                                                                }
                            <IonButton onClick={()=>setShow(true)} >Show description</IonButton>
                            <IonButton onClick={()=>setShow(false)} >Hide description</IonButton> 
                          </div>
                        </IonCardHeader>
                    </IonCard>
                    )
                })}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;

