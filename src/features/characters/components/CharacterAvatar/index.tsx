import { Image } from 'expo-image';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { CharacterAvatarProps } from './interfaces/character-avatar.interface';

const CharacterAvatar = ({
  uri,
  customClassContainer,
  width = 60,
  height = 60,
  ...rest
}: CharacterAvatarProps) => {
  return (
    <View className={twMerge('rounded-lg bg-frame', customClassContainer)}>
      <Image source={{ uri }} style={{ width, height }} {...rest} />
    </View>
  );
};

export default CharacterAvatar;
