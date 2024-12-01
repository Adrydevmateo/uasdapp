import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { Routes } from '../../router/types';
import { misionVisionValores } from './principal';

const Principal: React.FC = () => {
  const uasdImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bandera_de_la_Uasd.svg/1200px-Bandera_de_la_Uasd.svg.png"
  
  const router = useIonRouter();
  const navegar = () => router.push(Routes.ACCESO)
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pagina Principal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pagina Principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <img src={uasdImg} style={{ maxWidth: "100%", width: "100%", padding: "0" }} />
          <div className="ion-padding">
            {misionVisionValores.map(m => (
              <IonCard key={m.id}>
                <IonCardHeader>
                  <IonCardTitle>{m.label}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {m.description}

                  {m.list ? (
                    <IonList>
                      {m.list?.map(l => (
                        <IonItem key={m.id + l.id}>
                          <IonLabel>{l.label}: <span style={{ color: "#949494" }}>{l.description}</span></IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  ) : null}
                </IonCardContent>
              </IonCard>
            ))}
            <IonButton onClick={navegar} expand='full'>Acceder</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Principal;