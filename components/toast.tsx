import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text } from 'react-native';

type ToastProps = {
  show: boolean;
};

export default function Toast({ show }: ToastProps) {
  if (!show) return null;

  return (
    <View className="absolute top-10 flex flex-row items-center gap-2">
      <Ionicons name="warning-outline" size={20} color={'#ef4444'} />
      <Text className="text-warning">Usuário ou Senha Invalido</Text>
    </View>
  );
}

export function useToast() {
  const [show, setShow] = useState(false);

  function showToast() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  return {
    showToast,
    show,
  };
}
