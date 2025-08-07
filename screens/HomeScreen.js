import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Use any background image
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to the App!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
