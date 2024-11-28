import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Acceso: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acceso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acceso</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>Acceso</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acceso;
