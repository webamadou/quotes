import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Style from './Style'
import Quote from './components/quotes'
export default class App extends React.Component {
  state = {}
  componentWillMount(){
    this.generateQuotes()
  }
  generateQuotes = event => {
    let keys = Object.keys(Quote);
    let randomKey = keys[Math.floor(Math.random() * keys.length)];
    if(this.state.citation === Quote[randomKey].citation){
      this.generateQuotes();
      return
    }
    this.setState(Quote[randomKey]);
    console.log(keys)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={Style.bolder}>Welcome to the quotes generator</Text>
        <Text style={Style.citation}>{this.state.citation}</Text>
        <Text style={Style.author}>{this.state.auteur}</Text>
        <Button onPress={(e) => this.generateQuotes(e)} title="Suffle" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
