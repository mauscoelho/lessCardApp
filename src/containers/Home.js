import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode";
import uniqueId from "react-native-unique-id";
import { Button } from "react-native-elements";

export default class lessCardApp extends Component {
  static navigationOptions = {
    title: "LessCard"
  };

  state = {
    guid: ""
  };

  componentDidMount() {
    this.generateGuid();
  }

  generateGuid = () => {
    uniqueId().then(guid => this.setState({ guid }));
  };

  onStamp = () => {
    this.props.navigation.navigate("Reader");
  };

  render() {
    const { guid } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          {guid}
        </Text>
        <QRCode value={guid} size={200} fgColor="white" />
        <Button
          style={styles.buttonStamp}
          onPress={this.onStamp}
          title={"To Stamp"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStamp: {
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
