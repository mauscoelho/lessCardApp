import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { compose, defaultProps } from 'recompose';


const StampFeedback = ({ guid }) => {
  return (
    <View style={styles.container}>
      <Text>{guid}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const enhance = compose(
  defaultProps({
    guid: ''
  })
);

export default enhance(StampFeedback);
