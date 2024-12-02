import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import YouTube from 'react-youtube';
import { obtenerVideos } from '../../api/UASD';
import { Fragment, useEffect, useState } from 'react';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<Array<{id: number, url: string}>>([])
  
  const videoOptions = {
    height: '390',
    width: '100%',
  };

  useEffect(() => {
    obtenerVideos().then((res) => {
     setVideos(res)
    })
   }, [])

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
            <Fragment key={video.id}>
              <YouTube videoId={video.url} opts={videoOptions} />
              <br />
            </Fragment>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Videos;
