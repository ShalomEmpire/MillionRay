import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Toast, { useToast } from '@/components/toast';
import { router } from 'expo-router';
import { Button } from '@/components/button';

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { show, showToast } = useToast();

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center p-8">
      <Toast show={show} />
      <View className="items-center">
        <Text className="text-2xl">Login</Text>
      </View>
      <View className="mb-6 flex w-full">
        <Text className="text-lg">Bem vindo</Text>
        <Text className="text-gray-500">Entre com suas credenciais abaixo</Text>
        <View className="mt-4 gap-[2px]">
          <Text>Login</Text>
          <TextInput
            className="rounded-md border border-zinc-300 px-3 py-2"
            autoCapitalize={'characters'}
            onChangeText={(e) => setLogin(e.toUpperCase())}
          />
        </View>
        <View className="mt-4 gap-[2px]">
          <Text className="">Senha</Text>
          <TextInput
            secureTextEntry={!passwordVisible}
            className="rounded-md border border-zinc-300 px-3 py-2"
            onChangeText={setSenha}
          />
          <TouchableOpacity
            className="absolute bottom-[10px] right-4"
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={20} color="#B0B0B0" />
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title="Entrar"
        onPress={() => {
          router.replace('/(drawer)');
        }}
      />
      <Text className="absolute bottom-4">Versão 1.0.0</Text>
    </SafeAreaView>
  );
}
