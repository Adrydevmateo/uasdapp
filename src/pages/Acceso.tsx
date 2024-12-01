import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import { Routes } from '../router/types';

const Acceso: React.FC = () => {
  const router = useIonRouter();
  const navegar = () => router.push(Routes.MENU)

  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")

  const acceder = () => {
    const nuevoUsuario = {
      usuario,
      contrasena
    }

    navegar()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acceso</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acceso</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <IonList>
            <IonItem>
              <IonInput label="Usuario" labelPlacement="stacked" placeholder="Ingresa tu nombre de usuario" value={usuario} onInput={({ target }) => setUsuario(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Contraseña" labelPlacement="stacked" placeholder="Ingresa tu contraseña" type='password' value={contrasena} onInput={({ target }) => setContrasena(target.value)}></IonInput>
            </IonItem>
            <br />
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <IonButton routerLink={Routes.RECUPERACION} fill='clear'>Recuperar Contraseña</IonButton>
            <IonButton routerLink={Routes.INSCRIPCION} fill='clear'>Estudia con Nosotros</IonButton>
            </div>
          </IonList>
          <IonButton onClick={acceder} expand='full'>Acceder</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acceso;
