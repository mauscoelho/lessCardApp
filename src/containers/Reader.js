import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { compose, withHandlers } from 'recompose';
import QrCodeReader from '../components/QrCodeReader';

const onRead = e => {
  const guid = e.data;
  if (guid) {
    this.props.navigation.navigate("StampFeedback", { guid });
  }
};

const Reader = (props) => {
  return (
    <QrCodeReader onRead={onRead} {...props} />
  );
}

const enhance = compose(
  withHandlers({
    onRead
  })
);

export default enhance(Reader);

