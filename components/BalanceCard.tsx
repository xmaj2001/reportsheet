import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface BalanceCardProps {
  theme: "blue" | "purple"
  onAddMoney: () => void
}

export default function BalanceCard({ theme, onAddMoney }: BalanceCardProps) {
  const bgClass = theme === "blue" ? "bg-blue-600" : "bg-purple-600"

  return (
    <View className={`${bgClass} rounded-2xl p-6 relative overflow-hidden`}>
      {/* Background Pattern */}
      <View className="absolute top-4 right-4">
        <Ionicons name="card-outline" size={100} color="rgba(255,255,255,0.1)" />
      </View>

      {/* Balance */}
      <View className="mb-6">
        <Text className="text-white text-3xl font-bold">16,567.00 Kz</Text>
        <Text className="text-white/80 text-sm">A ser pago este mês</Text>
      </View>

      {/* Card Details */}
      <View className="flex-row justify-between items-end">
        <View>
          <Text className="text-white/60 text-xs mb-1">Funcionarios</Text>
          <Text className="text-white font-medium">20</Text>
        </View>
        <View>
          <Text className="text-white/60 text-xs mb-1">Disponivel</Text>
          <Text className="text-white font-medium">15/20</Text>
        </View>
        <TouchableOpacity className="bg-black/30 px-4 py-2 rounded-full" onPress={onAddMoney}>
          <Text className="text-white font-medium text-sm">Imprimir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
