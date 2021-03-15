import React from 'react';
import { View, StyleSheet } from 'react-native';
import DefaultTag from '../Components/DefaultTag';
import Screen from '../Components/Screen';
import SpotterScrollList from '../Components/SpotterScrollList';
import BackButton from '../Components/BackButton';
import MoreButton from '../Components/MoreButton';
import firestore from '../../firebase';
import { User } from '../Themes/Data';

export default class MatchProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spotters: []}
    this.routeParams = props.route.params;
  }
  componentDidMount() {
  this.unsubscribe = firestore.collection('spotters').onSnapshot((query) => {
    this.setState({
      spotters: (query.docs.map((doc) => new User(doc)))});
  });
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  render() {
    return (
      <Screen>
        <BackButton />
        <MoreButton />
        <View style={styles.container}>
          <DefaultTag text={this.routeParams.name}/>
        </View>
        {this.state.spotters.length > 0 && <SpotterScrollList spotters={this.state.spotters}/>}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginBottom: 10
  },
})