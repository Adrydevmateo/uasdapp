import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Recuperacion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recuperación</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recuperación</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>Recuperación</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Recuperacion;
