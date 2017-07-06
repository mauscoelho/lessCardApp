import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import QRCode from "react-native-qrcode";
import uniqueId from "react-native-unique-id";
import { compose, withHandlers, withState, lifecycle } from 'recompose';

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
  textContainer: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
});

const onStamp = ({ navigation }) => {
  navigation.navigate("Reader");
};

const Home = ({ guid, onStamp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        {guid}
      </Text>
      <QRCode value={guid} size={200} fgColor="white" />
      <Button
        style={styles.buttonStamp}
        onPress={onStamp}
        title={"To Stamp"}
      />
    </View>
  );
}

const enhance = compose(
  withState("guid", "setGuid", ''),
  lifecycle({
    componentDidMount() {
      const { guid, setGuid } = this.props;
      uniqueId().then(newGuid => setGuid(newGuid))
    }
  }),
  withHandlers({
    onStamp
  })
);

export default enhance(Home);

