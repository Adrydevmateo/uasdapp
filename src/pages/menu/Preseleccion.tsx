import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const Preseleccion: React.FC = () => {

  const [materias, setMaterias] = useState([
    {
      id: crypto.randomUUID(),
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 1",
      seleccionada: false,
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 2",
      seleccionada: false,
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 3",
      seleccionada: false,
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 4",
      seleccionada: false,
    },
    {
      id: crypto.randomUUID(),
      nombre: "Nombre",
      horario: "horario",
      aula: "Aula 5",
      seleccionada: false,
    }
  ])

  const seleccionarMateria = (id: string) => {
    const listaMateriasActualizadas = materias.map((materia) => {
      if (materia.id == id) {
        materia.seleccionada = !materia.seleccionada
      } 
      return materia
    }) 
    setMaterias(listaMateriasActualizadas)
  }

  const preseleccionar = () => {
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Preselección</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Preselección</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {materias.map((materia, index) => (
            <IonCard className='ion-padding' key={index} onClick={() => seleccionarMateria(materia.id)}>
              <IonCheckbox justify="space-between" checked={materia.seleccionada}>
                <IonCardSubtitle style={{fontSize: "2.1em"}}>{materia.horario}</IonCardSubtitle>
                <IonCardTitle style={{fontSize: "2.4em"}}>{materia.nombre}</IonCardTitle>
                <IonCardSubtitle style={{fontSize: "2.2em"}}>{materia.aula}</IonCardSubtitle>
              </IonCheckbox>
            </IonCard>
          ))}
          <IonButton onClick={preseleccionar} expand='full'>Preseleccionar</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Preseleccion;
