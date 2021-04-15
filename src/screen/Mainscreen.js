import React from 'react';
import { Button,StyleSheet, Text, View ,ImageBackground} from 'react-native';




function Mainscreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.U}>Login</Text>
            <View style={{width: 200,height: 50}}>
            <View style={{margin:20}}>
            <Button title="Students Login"  onPress={() => navigation.navigate('StdLogin')} 
            color="#469EF9" 
            />
             </View>
             <View style={{margin:20}}>
            <Button title="Teachers Login"  onPress={() => navigation.navigate('TchLogin')} 
            color="#469EF9" 
            />
             </View>
             <View style={{margin:20}}>
            <Button title="Parents Login"  onPress={() => navigation.navigate('PrLogin')} 
            color="#469EF9" 
            />
             </View>
            </View>
        </View>
    );
};

export default Mainscreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    
    },
    U:{
      marginTop: 50,
      alignItems : "center",
      fontSize: 40,
      color: '#000'
  
    
    }
  });
