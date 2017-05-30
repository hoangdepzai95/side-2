import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Wellcome from './scenes/wellcome';

const RouterComponent = () => {
  return (
    <Router hideNavBar={true}>
      <Scene key="wellcomeArea">
        <Scene key="wellcome" component={Wellcome} inital/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
