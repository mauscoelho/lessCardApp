import React from "react";
import axios from 'axios';
import { compose, withHandlers, withState, renderComponent, branch } from 'recompose';
import QrCodeReader from '../components/QrCodeReader';
import Loading from '../components/Loading';

const onRead = ({ isCodeRead, setCodeRead, navigation, setLoading }) => (e) => {
  const guid = e.data;
  if (!isCodeRead) {
    setCodeRead(true);
    setLoading(true);    
    axios.post("http://loyalti-cart-test-com.umbler.net/stamp", {
      guid
    });
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
  withState('loading', 'setLoading', false),
  withHandlers({
    onRead
  }),
  branch(
    props => !props.loading,
    renderComponent(Reader),
    renderComponent(Loading),
  ),
);

export default enhance(Reader);

