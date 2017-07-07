import React from "react";
import { compose, withHandlers, withState, renderComponent, branch } from 'recompose';
import QrCodeReader from '../components/QrCodeReader';
import Loading from '../components/Loading';

const onRead = ({ isCodeRead, setCodeRead, navigation, setLoading }) => (e) => {
  if (!isCodeRead) {
    setCodeRead(true);
    setLoading(true);
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

