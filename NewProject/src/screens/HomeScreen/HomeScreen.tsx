import { Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getJoke } from '../../services/ApiService';

export default function HomeScreen() {
  const [joke, setJoke] = useState<string | undefined>();

  const buttonHandler = async () => {
    const response = await getJoke();
    setJoke(response);

    console.log(response);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>{joke}</Text>
      <Button title="Joke" onPress={buttonHandler} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ac9696ff',
    padding: 34,
    gap: 25,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 34,
    textAlign: 'justify',
  },
});
