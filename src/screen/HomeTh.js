import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


function HomeTh({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.U}>Home</Text>
        <View style={{width: 200,height: 50}}>
        <View style={{marginTop:20}}>
        <Button title="Logout"  onPress={() => navigation.navigate('Main')} 
            color="#469EF9" 
          />
        </View>
        </View>
      </View>
    );
};

export default HomeTh;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });