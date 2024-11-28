import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const PaginaPrincipal: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pagina Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pagina Principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>Pagina Principal</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaginaPrincipal;
