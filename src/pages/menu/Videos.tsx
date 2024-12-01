import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import YouTube from 'react-youtube';

const Videos: React.FC = () => {

  const videoOptions = {
    height: '390',
    width: '100%',
  };

  const videos = [
    "E-VAoEkmVSU",
    "MjDGx7O1Bkc",
    "Rp5OSPhDVuM",
    "HGw3WW-SorU",
    "bZZWGBbYGrM"
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Videos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Videos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {videos.map(video => (
            <>
              <YouTube key={video} videoId={video} opts={videoOptions} />
              <br />
            </>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
