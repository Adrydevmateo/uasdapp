import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Routes } from '../../router/types';
import { routes } from '../../router';

const Menu: React.FC = () => {

  const mostrar = (url: Routes) => url !== Routes.ACCESO && url !== Routes.INSCRIPCION && url !== Routes.RECUPERACION && url !== Routes.MENU && url !== Routes.PRINCIPAL

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {routes.map(route => (
            <div key={route.url}>
              {mostrar(route.url) ? (
                  <IonButton routerLink={route.url} expand='full' style={{margin: "5px", height: "60px"}}>
                    {route.title}
                  </IonButton>
              ) : null}
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
