import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { obtenerEventos } from '../../api/UASD';

const Eventos: React.FC = () => {
  const [activado, setActivado] = useState("")
  const [eventos, setEventos] = useState([])

  useEffect(() => {
   obtenerEventos().then((res) => {
    setEventos(res)
   })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Eventos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Eventos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {eventos.map(evento => (
            <IonCard key={evento.id} onClick={() => setActivado(evento.id)}>
              <IonCardHeader>
                <IonCardSubtitle>{new Date(evento.fechaEvento).toLocaleDateString()}</IonCardSubtitle>
                <IonCardTitle>{evento.titulo}</IonCardTitle>
                <IonCardTitle>{evento.lugar}</IonCardTitle>
              </IonCardHeader>
              {activado == evento.id ? (
                <IonCardContent>{evento.descripcion}</IonCardContent>
              ) : null}
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Eventos;
