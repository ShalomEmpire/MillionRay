import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            headerTitle: 'Home',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="userProfile"
          options={{
            drawerLabel: 'Perfil de Usuário',
            headerTitle: 'Perfil de Usuário',
          }}
        />
        <Drawer.Screen
          name="setings"
          options={{
            drawerLabel: 'Configurações',
            headerTitle: 'Configurações',
          }}
        />
        <Drawer.Screen
          name="Sair"
          options={{
            drawerLabel: 'Sair',
            headerTitle: 'Sair',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
