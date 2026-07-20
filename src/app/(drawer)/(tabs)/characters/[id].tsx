import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const CharacterDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>CharacterDetailScreen {id}</Text>
    </View>
  );
};

export default CharacterDetailScreen;
