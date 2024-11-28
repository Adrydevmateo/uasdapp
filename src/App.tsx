import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Acceso from './pages/acceso/Acceso.page';
import Inscripcion from './pages/acceso/Inscripcion.page';
import MenuPrincipal from './pages/menu-principal/MenuPrincipal.page';
import PaginaPrincipal from './pages/pagina-principal/PaginaPrincipal.page';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/pagina-principal">
          <PaginaPrincipal />
        </Route>
        <Route exact path="/">
          <Redirect to="/pagina-principal" />
        </Route>
        <Route exact path="/acceso">
          <Acceso />
        </Route>
        <Route exact path="/inscripcion">
          <Inscripcion />
        </Route>
        <Route exact path="/menu-principal">
          <MenuPrincipal />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
