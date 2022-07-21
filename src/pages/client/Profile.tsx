import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonCard, IonCardHeader, IonCardSubtitle} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import UseApi from '../../components/UseApi';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const {data} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);
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
                  <IonItemDivider></IonItemDivider>
              </IonCol>
          </IonRow>
          <IonRow>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;