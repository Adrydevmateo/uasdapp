import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Inscripcion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inscripción</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inscripción</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>Inscripción</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inscripcion;
