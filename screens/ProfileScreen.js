import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john@example.com</Text>
      <Button title="Edit Profile" onPress={() => alert('Edit Profile Clicked')} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
});
