import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { obtenerNoticias } from '../../api/UASD';
import { useEffect, useState } from 'react';

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState([])
  useEffect(() => {
    obtenerNoticias().then((lista) => {
      let noticiasFiltradas = []
      for (let index = 0; index < 10; index++) {
        const noticia = lista[index];
        noticiasFiltradas.push(noticia)
      }
      setNoticias(noticiasFiltradas)
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Noticias</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Noticias</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          {noticias.map(noticia => (
            <a href={noticia.url} target='_blank' key={noticia.id} style={{textDecoration: "none"}}>
              <IonCard >
                <img src={noticia.img} />
                <IonCardHeader>
                  <IonCardSubtitle>{noticia.date}</IonCardSubtitle>
                  <IonCardTitle>{noticia.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton expand='full'>Conocer Mas</IonButton>
                </IonCardContent>
              </IonCard>
            </a>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Noticias;
