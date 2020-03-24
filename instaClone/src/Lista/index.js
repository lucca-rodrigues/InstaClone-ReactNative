import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  render(){
    return(
      <View style={styles.areaFedd}>
        <View style={styles.perfil}>
          <Image 
            source={{uri: this.state.feed.imgperfil}} // Pega a imagem direto da API
            style={styles.imgPerfil}
          />
          <Text style={styles.nomeUser}> {this.state.feed.nome} </Text> 
        </View>
        <Image 
          resizeMode="cover"
          source={{uri: this.state.feed.imgPublicacao}} // url da imagem na API
          style={styles.imgPublicacao}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  areaFedd: {
    padding: 10
  },
  nomeUser: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  imgPerfil: {
    width: 50,
    height:50,
    borderRadius: 25
  },
  imgPublicacao:{
    flex: 1,
    height: 400
  },
  perfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  }

})

export default Lista;