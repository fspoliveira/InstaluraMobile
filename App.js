/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';

import Post from './src/components/Post';

const path = 'https://instalura-api.herokuapp.com';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(path.concat("/api/public/fotos/rafael"))
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }

  render() {
    return (
      <FlatList style={styles.container}
        keyExtractor={item => item.id.toString()}
        data={this.state.posts}
        renderItem={({ item }) =>
          <Post foto={item} />
        } />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});