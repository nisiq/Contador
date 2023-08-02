import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Contador</Text>
      <View style={styles.btns}>

      <TouchableOpacity
          style={styles.btn2}
          onPress={()=>{setValor(valor-1)}}
    
        >
          <Text style={{fontSize:40, bottom:4}}>-</Text>
          
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.btn}
          onPress={()=>{setValor(valor+1)}}
    
        >
          <Text style={{fontSize:40, bottom:4}}>+</Text>
          
        </TouchableOpacity>

    
        
      </View>
      <Text style={{ color: '#fff', fontSize: 40, padding: 20 }}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btns: {
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
    width: '100%'
  },
  txt:{
    color: '#fff', 
    fontSize: 40,
    padding: 20

  },
  btn:{
    backgroundColor:'#ff0',
    width:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 100,
    
    
  },

  btn2:{
    backgroundColor:'blue',
    width:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    
  }

});
