import React, { Component } from "react";
import uniqueId from "react-native-unique-id";
import { compose, withHandlers, withState, lifecycle } from 'recompose';
import QrCode from '../components/QrCode';

const onStamp = ({ navigation }) => () => {
  navigation.navigate("Reader");
};

const Home = (props) => <QrCode {...props} />

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

