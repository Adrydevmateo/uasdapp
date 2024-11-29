import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { misionVisionValores } from './PaginaPrincipal.data';
import { ERutas } from '../../App';
import { useHistory } from 'react-router-dom';

const PaginaPrincipal: React.FC = () => {
  const history = useHistory()
  const uasdImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bandera_de_la_Uasd.svg/1200px-Bandera_de_la_Uasd.svg.png"

  const navegar = () => history.push(ERutas.ACCESO)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>UASD</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">UASD</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <img src={uasdImg} className='ion-padding' style={{ maxWidth: "100%" }} />
          <div className="ion-padding">
            {misionVisionValores.map(m => (
              <IonCard key={m.id}>
                <IonCardHeader>
                  <IonCardTitle>{m.label}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {m.description}

                  {m.list ? (
                    <IonList>
                      {m.list?.map(l => (
                        <IonItem key={m.id + l.id}>
                          <IonLabel>{l.label}: <span style={{ color: "#949494" }}>{l.description}</span></IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  ) : null}
                </IonCardContent>
              </IonCard>
            ))}
            <IonButton onClick={navegar} expand='full'>Acceder</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaginaPrincipal;
