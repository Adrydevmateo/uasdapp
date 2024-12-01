import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Acerca: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acerca</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acerca</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <h1>Acerca</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acerca;
