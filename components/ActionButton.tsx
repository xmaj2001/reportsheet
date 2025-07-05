import { Ionicons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

interface ActionButtonProps {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  onPress: () => void
}

export default function ActionButton({ icon, label, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity className="items-center" onPress={onPress}>
      <View className="w-14 h-14 bg-gray-100 rounded-2xl items-center justify-center mb-2">
        <Ionicons name={icon} size={24} color="#6b7280" />
      </View>
      <Text className="text-gray-600 text-sm">{label}</Text>
    </TouchableOpacity>
  )
}
