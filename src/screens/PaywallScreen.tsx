import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PaywallScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paywall</Text>
      <Button title="Go to Meditations" onPress={() => navigation.navigate('Meditations')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
