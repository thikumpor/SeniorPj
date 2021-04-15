import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.U}>Home</Text>
        <View style={{width: 200,height: 50}}>
        <View style={{marginTop:20}}>
        <Button title="Register Parents"  onPress={() => navigation.navigate('RegisterPr')} 
            color="#469EF9" 
          />
        </View>
        <View style={{marginTop:20}}>
        <Button title="Logout"  onPress={() => navigation.navigate('Main')} 
            color="#469EF9" 
          />
        </View>
      

        </View>
      </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });