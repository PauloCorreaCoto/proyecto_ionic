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
    NavContext,
    IonGrid,
    IonRow,
    IonCol,
    IonAlert
} from "@ionic/react";
import UseApi from "./UseApi";


    const PostData: React.FC = () => {
        const {refetch, data} = UseApi(`${process.env.REACT_APP_API_URL}/clients`);
        const [name, setName] = useState<string>("Dummy");
        const [address, setAddress] = useState<string>("Grecia");
        const [email, setEmail] = useState<string>("test.prueba@gmail.com");
        const [password, setPassword] = useState<string>("testadmin");
        const [iserror, setIserror] = useState<boolean>(false);
        const [message, setMessage] = useState<string>("");
        const { navigate } = useContext(NavContext);


        function validateEmail(email: string) {
            const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
            return re.test(String(email).toLowerCase());
        }

        const saveApi = () =>{
          {data?.map((client : any) => {
            return (
              //localStorage.setItem("apiData", JSON.stringify(client.id))
              localStorage.setItem("apiData", JSON.stringify(client.id+1))
            )
        })}
      }


        const handleSubmit = () => {

            if (!email) {
                setMessage("Please enter a valid email");
                setIserror(true);
                return;
            }
            if (validateEmail(email) === false) {
                setMessage("Your email is invalid");
                setIserror(true);
                return;
            }
        
            if (!password || password.length < 6) {
                setMessage("Please enter your password");
                setIserror(true);
                return;
            }
        
            if (!name) {
                setMessage("Please enter a valid name");
                setIserror(true);
                return;
            }
        
            if (!address) {
                setMessage("Please enter a valid address");
                setIserror(true);
                return;
            }


            saveApi()
            refetch({direction: address, name: name, password: password, email: email})
           
            navigate("/dashboard/" + name)            
        }

        return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Login</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent fullscreen className="ion-padding ion-text-center">
                <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonAlert
                        isOpen={iserror}
                        onDidDismiss={() => setIserror(false)}
                        cssClass="my-custom-class"
                        header={"Error!"}
                        message={message}
                        buttons={["Dismiss"]}
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                </IonRow>
                  <IonRow>
                    <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Email</IonLabel>
                    <IonInput
                        type="email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        >
                    </IonInput>
                    </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Name</IonLabel>
                    <IonInput
                        type="text"
                        value={name}
                        onIonChange={(e) => setName(e.detail.value!)}
                        >
                    </IonInput>
                    </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Address</IonLabel>
                    <IonInput
                        type="text"
                        value={address}
                        onIonChange={(e) => setAddress(e.detail.value!)}
                        >
                    </IonInput>
                    </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                    <IonItem>
                      <IonLabel position="floating"> Password</IonLabel>
                      <IonInput
                        type="password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                        >
                      </IonInput>
                    </IonItem>
                    </IonCol>
                  </IonRow>    
                  <IonRow>
                    <IonCol>
                      <IonButton expand="block" onClick={handleSubmit}> Sign up</IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonContent>
            </IonPage>
          );
        }

        
    
    export default PostData;