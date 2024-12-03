import { IonAlert, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { crearSolicitud, obtenerSolicitudes } from '../../api/UASD';

type Estado = "Pendiente" | "Aprobada" | "Cancelada"

interface Solicitud {
  "id": number,
  "usuarioId": number,
  "tipo": string,
  "descripcion": string,
  "estado": Estado,
  "fechaSolicitud": string,
  "fechaRespuesta": null | string,
  "respuesta": null | string
}

const Solicitudes: React.FC = () => {

  const [nuevaSolicitud, setNuevaSolicitud] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const tiposDeSolicitud = [
    {
      "codigo": "beca",
      "descripcion": "Solicitud de beca"
    },
    {
      "codigo": "carta_estudio",
      "descripcion": "Carta de estudios"
    },
    {
      "codigo": "record_nota",
      "descripcion": "Record de nota"
    }
  ]

  const solicitar = () => {
    const encontrada = tiposDeSolicitud.find(f => f.codigo == nuevaSolicitud)
    crearSolicitud({ tipo: encontrada?.codigo, descripcion: encontrada?.descripcion }).then(res => {
      if (res?.aprobado) {
        setMsg(res.msg)
        setIsOpen(true)
      }
    })

  }

  const [solicitudes, setSolicitudes] = useState<Array<Solicitud>>([])

  useEffect(() => {
    obtenerSolicitudes().then((res) => {
      setSolicitudes(res)
    })
  }, [msg])

  const obtenerColorDeBorde = (estado: Estado) => {
    type IonicColor = "--ion-color-warning" | "--ion-color-success" | "--ion-color-primary-shade" | "--ion-color-danger"
    let color: IonicColor = "--ion-color-primary-shade"
    if (estado == "Aprobada") {
      color = "--ion-color-success"
    } else if (estado == "Pendiente") {
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
            <IonSelect label="Tipo de solicitud"
              onIonChange={(e) => setNuevaSolicitud(e.detail.value)}
            >
              {tiposDeSolicitud.map(solicitud => (
                <IonSelectOption key={solicitud.codigo} value={solicitud.codigo}>{solicitud.descripcion}</IonSelectOption>
              ))}
            </IonSelect>
            <IonButton onClick={solicitar} expand='full'>Solicitar</IonButton>
            <IonAlert
              isOpen={isOpen}
              header="Éxito"
              message={msg}
              buttons={['Gracias']}
              onDidDismiss={() => setIsOpen(false)}
            ></IonAlert>
          </div>

          <br />

          <div>
            {solicitudes.map(solicitud => (
              <IonCard className='ion-padding' key={solicitud.id} style={{ borderWidth: "1px", borderStyle: "solid", borderColor: `var(${obtenerColorDeBorde(solicitud.estado)})` }}>
                <IonCardHeader>
                  <IonCardSubtitle>{new Date(solicitud.fechaSolicitud).toLocaleDateString()}</IonCardSubtitle>
                  <IonCardTitle style={{ textTransform: "capitalize" }}>{solicitud.estado}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{solicitud.descripcion}</IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Solicitudes;
