import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.U}>Test</Text>
        <View style={{width: 200,height: 50}}>
        <View style={{marginTop:20}}>
        <Button title="Finish"  onPress={() => navigation.navigate('Home')} 
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