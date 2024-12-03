import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import { Routes } from '../router/types';
import { cambiarContrasena } from '../api/UASD';

const Recuperacion: React.FC = () => {
  const router = useIonRouter();
  const navegar = () => router.push(Routes.ACCESO)

  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  const [msg, setMsg] = useState("");

  const recuperar = async () => {
    const res = await cambiarContrasena({ email, usuario })
    if (res?.aprobado) {
      setMsg(res.msg)
      setIsOpen(true)
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Recuperación</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Recuperación</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <IonList>
            <IonItem>
              <IonInput label="Email" labelPlacement="stacked" placeholder="Ingresa tu email" value={email} onInput={({ target }) => setEmail(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Usuario" labelPlacement="stacked" placeholder="Ingresa tu nombre de usuario" value={usuario} onInput={({ target }) => setUsuario(target.value)}></IonInput>
            </IonItem>
            <br />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
              <IonButton routerLink={Routes.ACCESO} fill='clear'>Accede</IonButton>
              <IonButton routerLink={Routes.INSCRIPCION} fill='clear'>Estudia con Nosotros</IonButton>
            </div>
          </IonList>
          <IonButton onClick={recuperar} expand='full'>Recuperar</IonButton>
          <IonAlert
            isOpen={isOpen}
            header="Contraseña cambiada"
            message={msg}
            buttons={['Gracias']}
            onDidDismiss={() => setIsOpen(false)}
          ></IonAlert>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Recuperacion;
