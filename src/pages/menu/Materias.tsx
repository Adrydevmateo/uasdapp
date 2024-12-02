import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Materia } from '../../api/types';
import { obtenerMaterias } from '../../api/UASD';

const Materias: React.FC = () => {

  const [activo, setActivo] = useState("")
  const [materias, setMaterias] = useState<Array<Materia>>([])

  useEffect(() => {
    obtenerMaterias().then((res) => {
     setMaterias(res)
    })
   }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Materias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Materias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {materias.map((materia) => (
            <IonCard key={materia.codigo} onClick={() => setActivo(materia.codigo)}>
              <IonCardHeader>
                <IonCardSubtitle>{materia.horario}</IonCardSubtitle>
                <IonCardTitle>{materia.nombre}</IonCardTitle>
                <IonCardSubtitle>Aula: {materia.aula}</IonCardSubtitle>
                <IonCardSubtitle>Código: {materia.codigo}</IonCardSubtitle>
              </IonCardHeader>
              {
                activo == materia.codigo ? (
                  <IonCardContent>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  </IonCardContent>
                ) : null
              }
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Materias;
