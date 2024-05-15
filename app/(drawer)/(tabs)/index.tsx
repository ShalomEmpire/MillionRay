import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex flex-1 flex-col items-center justify-center">
      <Text>Pagina Home</Text>
      <Link href="/contacts">Ir para contatos</Link>
    </View>
  );
}
