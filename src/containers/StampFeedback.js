import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class StampFeedback extends Component {
  state = {
    guid: ""
  };
  
  static navigationOptions = {
    title: "Stamp feedback"
  };

  componentDidMount() {
    const { guid } = this.props.navigation.state.params;
    this.setState({ guid });
  }

  render() {
    const { guid } = this.state;
    return (
      <View style={styles.container}>
        <Text>{guid}</Text>
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
  }
});
