import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
   goToCARD=(CARD)=> {
      this.props.navigation.navigate('CARD')
    }
    render() {
    return (
          <TouchableOpacity
          style={{marginLeft:50,
          marginTop:150,
          backgroundColor:"#00ff00",
          width:200,
          height:200,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:100}}
          onPress={this.playSound} 
          onPress={()=> alert("HAPPY MOTHER'S DAY AMMA")}
          >
          <Text> SOUND BUTTON </Text>
         </TouchableOpacity>
    );
  }
}