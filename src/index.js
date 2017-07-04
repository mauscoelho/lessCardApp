import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode";
import uniqueId from "react-native-unique-id";

export default class lessCardApp extends Component {
  state = {
    guid: ""
  };

  componentDidMount() {
    this.generateGuid();
  }

  generateGuid = () => {
    uniqueId().then(guid => this.setState({ guid }));
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
