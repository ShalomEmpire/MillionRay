import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex w-full items-center justify-center rounded-md bg-red-500 py-3">
        <Text className="font-rubik-medium text-center">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
