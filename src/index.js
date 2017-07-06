import { StackNavigator } from "react-navigation";
import Home from "./containers/Home";
import Reader from "./containers/Reader";
import StampFeedback from './containers/StampFeedback';

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: "Home" }
  },
  Reader: {
    screen: Reader,
    navigationOptions: { title: "Reader" }
  },
  StampFeedback: {
    screen: StampFeedback,
    navigationOptions: { title: "StampFeedback" }
  }
});

export default App;
