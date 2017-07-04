import { StackNavigator } from "react-navigation";
import Home from "./containers/Home";
import Reader from './containers/Reader';

const App = StackNavigator({
  Home: { screen: Home },
  Reader: { screen: Reader }
});

export default App;
