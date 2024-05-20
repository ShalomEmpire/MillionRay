import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  title: string;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className="flex w-full items-center justify-center rounded-md bg-red-500 py-3"
      onPress={onPress}>
      <Text className="font-rubik-medium text-center text-white">{title}</Text>
    </TouchableOpacity>
  );
}
