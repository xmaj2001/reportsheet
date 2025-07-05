import { Modal, View, Text, TouchableOpacity, Dimensions } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

interface FingerprintModalProps {
  visible: boolean
  onClose: () => void
}

const { width, height } = Dimensions.get("window")

export default function FingerprintModal({ visible, onClose }: FingerprintModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 bg-black/50 items-center justify-center">
        <View className="bg-white rounded-3xl p-8 mx-8 items-center">
          <View className="w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-6">
            <MaterialIcons name="fingerprint" size={40} color="#3b82f6" />
          </View>

          <Text className="text-xl font-semibold text-gray-800 mb-2">Authenticate</Text>
          <Text className="text-gray-500 text-center mb-8">Use your fingerprint to confirm the transaction</Text>

          <TouchableOpacity className="bg-gray-100 px-6 py-3 rounded-full" onPress={onClose}>
            <Text className="text-gray-600 font-medium">Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
