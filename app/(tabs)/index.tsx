import { router } from "expo-router";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";

export default () => {
  return (
    <View className="flex-1 ">
      <View className="flex-1 bg-white" />
      <View className="justify-center items-center">
        <View className="w-full h-5 bg-black" />
        <TouchableOpacity
          className="w-20 h-20 bg-white rounded-full absolute z-20 border-[4px] border-black"
          onPress={() => router.push("./home")}
          activeOpacity={0.8}
        />
      </View>
      <View className="flex-1 bg-red-500" />
    </View>
  );
};

