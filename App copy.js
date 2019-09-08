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
  FlatList
} from 'react-native';

import Post from './src/components/Post';


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
 
 /*
 <FlatList style={{marginTop: 20}}
  data={fotos}
  keyExtractor={item => item.id}
  renderItem={ ({item}) => 
    <View >    
      <View style={styles.cabecalho}>
        <Image source={require('./resources/img/alura.jpg')}
            style={styles.fotoDePerfil} />
        <Text>{item.usuario}</Text>
      </View>
      <Image source={require('./resources/img/alura.jpg')}
          style={styles.foto} />
    </View>
  }
/>
*/

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }  
})

export default App;