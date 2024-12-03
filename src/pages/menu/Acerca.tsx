import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AdryPic from "../../assets/profile.jpg";
import EngelPic from "../../assets/Engel.jpg";
import ErikPic from "../../assets/erik.jpg";
import FrankPic from "../../assets/frank.jpeg";

interface Desarrollador {
  id: string;
  nombre: string;
  matricula: string;
  foto: string;
  mensaje: string;
}

const Acerca: React.FC = () => {
  const desarrolladores: Array<Desarrollador> = [
    {
      id: crypto.randomUUID(),
      nombre: "Engel Yanset Rodriguez Contreras",
      foto: EngelPic,
      mensaje:
        "Soy un desarrollador de software junior con experiencia en programación y desarrollo de aplicaciones. Me enfoco en aprender y aplicar buenas prácticas mientras colaboro en proyectos de software con un enfoque en mejorar mis habilidades técnicas.",
      matricula: "2022-0849",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Erik Risland Perdomo",
      foto: ErikPic,
      mensaje: "Desarrollador Full-Stack orientado más a Programación Web en .NET, me enfoco más en aprender todo lo posible para ser de ayuda en más ramas de la programación",
      matricula: "2023-0595",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Frank Lafontaine Peralta",
      foto: FrankPic,
      mensaje: "Soy un desarrollador de software junior apasionado por la tecnología y el aprendizaje continuo. Tengo experiencia en programación y desarrollo de aplicaciones, y me especializo en implementar soluciones eficientes siguiendo buenas prácticas.",
      matricula: "2023-0675",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Junior Emmanuel Rosario Batista",
      foto: "",
      mensaje: "",
      matricula: "",
    },
    {
      id: crypto.randomUUID(),
      nombre: "Adry Mateo Ramon",
      foto: AdryPic,
      mensaje:
        "Desarrollador web orientado a soluciones con años de experiencia entregando proyectos de alto impacto, con una capacidad para cultivar relaciones sólidas que mejoran la colaboración y respaldan objetivos estratégicos. Altamente adaptable en entornos dinámicos, aprovechando excelentes habilidades de comunicación para asegurar la alineación del equipo y lograr el éxito de los proyectos.",
      matricula: "2017-5331",
    },
  ];

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
        <div
          className="ion-padding"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {desarrolladores.map((desarrollador) => (
            <IonCard key={desarrollador.id} style={{ maxWidth: "350px" }}>
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
