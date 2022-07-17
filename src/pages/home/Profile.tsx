import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';

interface ResetProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Dashboard: React.FC<ResetProps> = ({ match }) => {
  const history = useHistory();
  const [users, setUsers] = useState<Array<any>>([]);
  useEffect(() => {
    const api = axios.create({
        baseURL: `https://reqres.in/api`
    })
    api.get("/users")
        .then(res => {             
            setUsers(res.data.data)
        })
        .catch(error=>{
            console.log("Error fetching data")
        })
  }, [])
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