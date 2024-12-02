import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { obtenerMaterias, obtenerPreseleccion, preseleccionarMateria } from '../../api/UASD';
import { Materia } from '../../api/types';

const Preseleccion: React.FC = () => {
  interface MateriaASeleccionar extends Materia {
    seleccionada: boolean
  }
  const [materias, setMaterias] = useState<Array<MateriaASeleccionar>>([])
  

  useEffect(() => {
    (async () => {
    const preseleccion = await obtenerPreseleccion()
    const materiasObtenidas = await obtenerMaterias()
    const materiasActualizadas = []
    
    for (let index = 0; index < materiasObtenidas.length; index++) {
      if(preseleccion[index] && preseleccion[index].codigo == materiasObtenidas[index].codigo) {
        const materia = preseleccion[index]
        materia.seleccionada = true
        materiasActualizadas.push(materia)
      } else {
        const materia = materiasObtenidas[index]
        materia.seleccionada = false
        materiasActualizadas.push(materia)
      }
    }
    
   setMaterias(materiasActualizadas)
    })()

    
   }, [])

  const seleccionarMateria = async (codigo: string) => {
    const listaMateriasActualizadas = materias.map((materia) => {
      if (materia.codigo == codigo) {
        materia.seleccionada = !materia.seleccionada
      } 
      return materia
    }) 
    await preseleccionarMateria(codigo)
    setMaterias(listaMateriasActualizadas)
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
            <IonCard className='ion-padding' key={index} onClick={() => seleccionarMateria(materia.codigo)}>
              <IonCheckbox justify="space-between" checked={materia.seleccionada}>
                <IonCardSubtitle style={{fontSize: "2.1em"}}>{materia.horario}</IonCardSubtitle>
                <IonCardTitle style={{fontSize: "2.4em"}}>{materia.nombre}</IonCardTitle>
                <IonCardSubtitle style={{fontSize: "2.2em"}}>Aula: {materia.aula}</IonCardSubtitle>
              </IonCheckbox>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Preseleccion;
