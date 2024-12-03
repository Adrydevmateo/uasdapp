import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Tarea } from '../../api/types';
import { obtenerTareas } from '../../api/UASD';

const Tareas: React.FC = () => {

  const [tareas, setTareas] = useState<Array<Tarea>>([])

  useEffect(() => {
    obtenerTareas().then(res => {
      setTareas(res)
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tareas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {tareas.map(tarea => (
            <IonCard key={tarea.id}>
            <IonCardHeader>
              <IonCardSubtitle>Fecha limite: {new Date(tarea.fechaVencimiento).toLocaleDateString()}</IonCardSubtitle>
              <IonCardTitle>{tarea.titulo}</IonCardTitle>
              <IonCardSubtitle>{tarea.completada ? "Completada" : "Pendiente"}</IonCardSubtitle>
            </IonCardHeader>
      
            <IonCardContent>{tarea.descripcion}</IonCardContent>
          </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tareas;
