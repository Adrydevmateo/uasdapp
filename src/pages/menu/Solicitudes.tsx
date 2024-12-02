import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

type Estado = "pendiente" | "en proceso" | "aprobada" | "rechazada"

interface Solicitud {
  id: string,
  nombre: string,
  estado: Estado,
  respuesta: string
}

const Solicitudes: React.FC = () => {
  const [nuevaSolicitud, setNuevaSolicitud] = useState<Solicitud>({
    id: crypto.randomUUID(),
    nombre: "Nombre de la solicitud",
    estado: "pendiente",
    respuesta: ""
  })

  const solicitar = () => {

  }

  const [solicitudes, setSolicitudes] = useState<Array<Solicitud>>([
    {
      id: crypto.randomUUID(),
      nombre: "Nombre de la solicitud",
      estado: "aprobada",
      respuesta: "Repuesta"
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre de la solicitud",
      estado: "en proceso",
      respuesta: "Repuesta"
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre de la solicitud",
      estado: "pendiente",
      respuesta: "Repuesta"
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre de la solicitud",
      estado: "rechazada",
      respuesta: "Repuesta"
    }
  ])

  const obtenerColorDeBorde = (estado: Estado) => {
    type IonicColor = "--ion-color-warning" | "--ion-color-success" | "--ion-color-primary-shade" | "--ion-color-danger"
    let color: IonicColor = "--ion-color-primary-shade"
    if (estado == "en proceso") {
      color = "--ion-color-warning"
    } else if (estado == "aprobada") {
      color = "--ion-color-success"
    } else if (estado == "pendiente") {
      color = "--ion-color-primary-shade"
    } else {
      color = "--ion-color-danger"
    }
    return color
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Solicitudes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Solicitudes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          <div>
            <IonInput label="Crear solicitud" placeholder="Ingresa tu solicitud" onInput={({target}) => setNuevaSolicitud(target.value)}></IonInput>
            <IonButton onClick={solicitar} expand='full'>Solicitar</IonButton>
          </div>

          <br />

          <div>
            {solicitudes.map(solicitud => (
              <IonCard className='ion-padding' key={solicitud.id} style={{ borderWidth: "1px", borderStyle: "solid", borderColor: `var(${obtenerColorDeBorde(solicitud.estado)})` }}>
                <IonCardHeader>
                  <IonCardTitle style={{ textTransform: "capitalize" }}>{solicitud.estado}</IonCardTitle>
                  <IonCardSubtitle>{solicitud.respuesta}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Solicitudes;
