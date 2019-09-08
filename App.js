/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { 
  StyleSheet, 
  Dimensions,
  FlatList    
} from 'react-native';

import Post from './src/components/Post';

const width = Dimensions.get('screen').width;
const fotos = [
  {id: "1", usuario: 'rafael'},
  {id: "2", usuario: 'alberto'},
  {id: "3", usuario: 'vitor'}
];

const App = () => {
  return (  
    <FlatList style={styles.container}
    data={fotos}
    keyExtractor={item => item.id}
    renderItem={ ({item}) => 
     <Post foto={item} />
    }
  />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }  
})

export default App;