import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';
import { routes } from '../../router';
import { Routes } from '../../router/types';

const Menu: React.FC = () => {
  const location = useLocation();

  const links = routes.filter(
    f => f.url === Routes.PRINCIPAL || 
    f.url === Routes.ACCESO || 
    f.url === Routes.MENU || 
    f.url === Routes.MATERIAS || 
    f.url === Routes.DEUDA || 
    f.url === Routes.EVENTOS || 
    f.url === Routes.SALIR
  )

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {links.map((item) => {
            return (
              <IonMenuToggle key={item.url} autoHide={false}>
                <IonItem className={location.pathname === item.url ? 'selected' : ''} routerLink={item.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{item.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
