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
          <View style={styles.row}>
            <TouchableOpacity >
              <Image 
                style={styles.icone}
                source={require('../img/like.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSend}>
              <Image 
                style={styles.icone}
                source={require('../img/send.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rodapeFeed}>
            <Text style={styles.nomeUser}>
              {this.state.feed.nome}
            </Text>
            <Text style={styles.descRodape}>
              {this.state.feed.descricao}
            </Text>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  areaFedd: {
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
  },
  icone: {
    width: 33,
    height:33,
    padding: 5
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    padding: 5
  },
  btnSend: {
    paddingLeft: 10
  },
  rodapeFeed: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeUser: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  }

})

export default Lista;