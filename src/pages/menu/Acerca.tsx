import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AdryPic from '../../assets/profile.jpg'

interface Desarrollador {
  id: string,
  nombre: string,
  matricula: string,
  foto: string,
  mensaje: string
}

const Acerca: React.FC = () => {

  const desarrolladores: Array<Desarrollador> = [
    {
      id: crypto.randomUUID(),
      nombre: "Engel Yanset Rodriguez Contreras",
      foto: "",
      mensaje: "",
      matricula: ""
    },
    {
      id: crypto.randomUUID(),
      nombre: "Erik Risland Perdomo",
      foto: "",
      mensaje: "",
      matricula: ""
    },
    {
      id: crypto.randomUUID(),
      nombre: "Frank Lafontaine Peralta",
      foto: "",
      mensaje: "",
      matricula: ""
    },
    {
      id: crypto.randomUUID(),
      nombre: "Junior Emmanuel Rosario Batista",
      foto: "",
      mensaje: "",
      matricula: ""
    },
    {
      id: crypto.randomUUID(),
      nombre: "Adry Mateo Ramon",
      foto: AdryPic,
      mensaje: "Desarrollador web orientado a soluciones con años de experiencia entregando proyectos de alto impacto, con una capacidad para cultivar relaciones sólidas que mejoran la colaboración y respaldan objetivos estratégicos. Altamente adaptable en entornos dinámicos, aprovechando excelentes habilidades de comunicación para asegurar la alineación del equipo y lograr el éxito de los proyectos.",
      matricula: "2017 - 5331"
    }
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acerca</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Acerca</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding' style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {desarrolladores.map(desarrollador => (
            <IonCard key={desarrollador.id} style={{maxWidth: "350px"}}>
              <img alt="Silhouette of mountains" src={desarrollador.foto} />
              <IonCardHeader>
                <IonCardTitle>{desarrollador.nombre}</IonCardTitle>
                <IonCardSubtitle>{desarrollador.matricula}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>{desarrollador.mensaje}</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acerca;
