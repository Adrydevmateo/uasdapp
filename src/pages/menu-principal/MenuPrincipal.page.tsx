import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const MenuPrincipal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu Principal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h1>Menu Principal</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MenuPrincipal;
