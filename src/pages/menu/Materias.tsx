import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const Materias: React.FC = () => {

  const [activo, setActivo] = useState("")

  const materias = [
    {
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 1",
    },
    {
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 2",
    },
    {
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 3",
    },
    {
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 4",
    },
    {
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 5",
    }
  ]

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
          {materias.map((materia, index) => (
            <IonCard key={index} onClick={() => setActivo(`${materia.nombre}-${materia.horario}-${materia.aula}`)}>
              <IonCardHeader>
                <IonCardSubtitle>{materia.horario}</IonCardSubtitle>
                <IonCardTitle>{materia.nombre}</IonCardTitle>
                <IonCardSubtitle>{materia.aula}</IonCardSubtitle>
              </IonCardHeader>
              {
                activo == `${materia.nombre}-${materia.horario}-${materia.aula}` ? (
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
