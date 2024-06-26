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
            drawerIcon: ({ size, color }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="setings"
          options={{
            drawerLabel: 'Configurações',
            headerTitle: 'Configurações',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sair"
          options={{
            drawerLabel: 'Sair',
            headerTitle: 'Sair',
            drawerIcon: ({ size, color }) => (
              <Ionicons name="power-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
