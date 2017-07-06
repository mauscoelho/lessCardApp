import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import QrCodeReader from '../components/QrCodeReader';


export default class Reader extends Component {  
  onRead = e => {
    const guid = e.data;
    if (guid) {
      this.props.navigation.navigate("StampFeedback", { guid });
    }
  };

  render() {
    return (
      <QrCodeReader onRead={this.onRead} />
    );
  }
}


