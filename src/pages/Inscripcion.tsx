import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import { Routes } from '../router/types';
import { crearUsuario } from '../api/UASD';
import { Usuario } from '../api/types';

const Inscripcion: React.FC = () => {
  const router = useIonRouter();
  const navegar = () => router.push(Routes.ACCESO)

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")
  // const [confirmarContrasena, setConfirmarContrasena] = useState("")

  const inscribirse = () => {
    // if(contrasena !== confirmarContrasena) return

    const nuevoUsuario: Usuario = {
      username: usuario,
      password: contrasena,
      nombre,
      apellido,
      email
    }

    crearUsuario(nuevoUsuario)

    navegar()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inscripción</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inscripción</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <IonList>
            <IonItem>
              <IonInput label="Nombre" labelPlacement="stacked" placeholder="Ingresa tu nombre" value={nombre} onInput={({ target }) => setNombre(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Apellido" labelPlacement="stacked" placeholder="Ingresa tu apellido" value={apellido} onInput={({ target }) => setApellido(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Usuario" labelPlacement="stacked" placeholder="Ingresa tu nombre de usuario" value={usuario} onInput={({ target }) => setUsuario(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Contraseña" labelPlacement="stacked" placeholder="Ingresa tu contraseña" type='password' value={contrasena} onInput={({ target }) => setContrasena(target.value)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput label="Email" labelPlacement="stacked" placeholder="Ingresa tu email" value={email} onInput={({ target }) => setEmail(target.value)}></IonInput>
            </IonItem>
            <br />
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <IonButton routerLink={Routes.ACCESO} fill='clear'>Acceder</IonButton>
            </div>
          </IonList>
          <IonButton onClick={inscribirse} expand='full'>Inscribirse</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inscripcion;
