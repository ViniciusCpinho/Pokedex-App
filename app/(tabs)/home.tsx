import { TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1">
      <View className="w-full h-16 bg-red-600" />
      <View className="w-2/3 h-6 bg-red-600 rounded-br-lg" />

      <View className="flex-1 p-4">
        <TextInput className="bg-slate-200 p-2 rounded-lg" />
        <View className="flex-1 mt-6 bg-slate-200 rounded-lg" />
      </View>

      <View className="w-full h-24 bg-red-600 justify-center items-center relative">
        <TouchableOpacity
          className="w-20 h-20 bg-white rounded-full border-4 border-white absolute bottom-10"
          activeOpacity={1}
        />
      </View>
    </View>
  );
}

