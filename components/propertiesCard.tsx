import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export function PropertiesCard() {
  return (
    <TouchableOpacity className="bg-white w-full items-center justify-center rounded-md">
      <View className="w-full">
        <Image
          className="h-48 w-full rounded-t-md"
          source={require('@/assets/images/imovel.jpeg')}
        />
      </View>
      <View className="mt-2 w-full gap-1 p-2">
        <Text className="bg-zinc-200 w-[50] rounded-md p-1 text-sm">Cód. 6</Text>
        <Text className="text-lg font-bold">Apartamento</Text>
        <Text>Lago Sul, Brasília/DF - Brasília, 88 - OCEAN 88 CONDOMINIUM</Text>
        <View className="w-[80%] flex-row justify-between">
          <Text>3 quartos</Text>
          <Text>2 ban</Text>
          <Text>3 vagas</Text>
          <Text>211 m2</Text>
        </View>
        <Text>R$ 5.560.841</Text>
        <View className="w-[80%] flex-row justify-between">
          <Text>
            Cond: <Text>R$ 12.907,27</Text>
          </Text>
          <Text>
            IPTU/ITR: <Text>R$ 6.789,50</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
