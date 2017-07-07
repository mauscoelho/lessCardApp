import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import QrCodeReader from '../components/QrCodeReader';

const onRead = ({ isCodeRead, setCodeRead, navigation }) => (e) => {
  if (!isCodeRead) {
    setCodeRead(true);
    navigation.goBack();
  }
};

const Reader = (props) => {
  return (
    <QrCodeReader {...props} />
  );
}

const enhance = compose(
  withState('isCodeRead', 'setCodeRead', false),  
  withHandlers({
    onRead
  })
);

export default enhance(Reader);

