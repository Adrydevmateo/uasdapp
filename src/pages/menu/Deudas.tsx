import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { obtenerDeudas } from '../../api/UASD';
import { Deuda } from '../../api/types';

const Deudas: React.FC = () => {
  const [deudas, setDeudas] = useState<Array<Deuda>>([])

  useEffect(() => {
    obtenerDeudas().then((res) => {
      setDeudas(res as Array<Deuda>)
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Deudas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Deudas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {deudas.map(deuda => (
            <IonCard key={deuda.id}>
              <IonCardHeader>
                <IonCardSubtitle>Fecha de actualización: {new Date(deuda.fechaActualizacion).toLocaleDateString()}</IonCardSubtitle>
                <IonCardSubtitle>ID: {deuda.usuarioId}</IonCardSubtitle>
                <IonCardTitle>Monto a pagar: {deuda.monto} DOP</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{deuda.pagada ? 'Pagada' : 'Pago pendiente'}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Deudas;
