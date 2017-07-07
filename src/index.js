import { StackNavigator } from "react-navigation";
import Home from "./containers/Home";
import Reader from "./containers/Reader";

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: "Home" }
  },
  Reader: {
    screen: Reader,
    navigationOptions: { title: "Reader" }
  },
});

export default App;
