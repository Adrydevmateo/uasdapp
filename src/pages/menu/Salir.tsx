import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { Routes } from '../../router/types';
import { Preferences } from '@capacitor/preferences';

const Salir: React.FC = () => {

  const router = useIonRouter();
  const navegar = () => router.push(Routes.ACCESO)
  
  const salir = async () => {
    await Preferences.remove({ key: 'jwt' });

    location.href = "/acceso"
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Salir</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Salir</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <IonButton onClick={salir} expand='full' style={{ margin: "5px", height: "60px" }}>
            Cerrar Sesion
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Salir;
