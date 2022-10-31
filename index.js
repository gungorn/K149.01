import {AppRegistry} from 'react-native';

import {App} from './src/app';

const getFirstComponent = () => {
  return App;
};

AppRegistry.registerComponent('helloreactnative', getFirstComponent);
