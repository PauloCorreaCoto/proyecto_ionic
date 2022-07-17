import { IonApp, IonLabel, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';


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

/* Theme variables */
import './theme/variables.css';
import PlateHome from './pages/platesHome/PlateHome';
import Home from './pages/home/Home';
import Client from './pages/client/Client';
import Login from './pages/home/Login';
import Dashboard from './pages/home/Profile';
import Signup from './pages/client/Signup';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
          <Route path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />

            <Route path="/PlateHome" exact={true}>
              <PlateHome />
            </Route>
            <Route path="/Client" exact={true}>
              <Client />
            </Route>
            <Route path="/dashboard/:id" component={Dashboard} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/Home" exact={true}>
              <Home />
            </Route>
            <Route path="/Signup" exact={true}>
              <Signup />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;