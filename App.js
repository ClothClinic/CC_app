import {
  createStackNavigator,
} from 'react-navigation';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import HomeScreen from './HomeScreen.js';

const App = createStackNavigator({
  Home: { screen: SignUp },
  SignIn: { screen: SignIn },
  HomeScreen: { screen: HomeScreen },
});

export default App;