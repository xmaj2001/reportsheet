import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import BalanceCard from "../components/BalanceCard"
import ActionButton from "../components/ActionButton"
import TransactionItem, { Transaction } from "../components/TransactionItem"
import FingerprintModal from "../components/FingerprintModal"

const transactions:Transaction[] = [
  {
    id: 1,
    type: "Funcionario",
    amount: "100.00",
    time: "Today 1:53 PM",
    status: "Salario",
    icon: "clipboard",
    color: "text-blue-500",
  },
  {
    id: 2,
    type: "Transfer",
    amount: "500.00",
    time: "Today 2:53 PM",
    status: "Salario",
    icon: "clipboard",
    color: "text-red-500",
  },
  {
    id: 3,
    type: "Received",
    amount: "50.00",
    time: "Today 3:32 PM",
    status: "Salario",
    icon: "clipboard",
    color: "text-green-500",
  },
  {
    id: 4,
    type: "Funcionario",
    amount: "20.00",
    time: "Jan 15, 5:15 AM",
    status: "Salario",
    icon: "clipboard",
    color: "text-blue-500",
  },
]

export default function HomeScreen() {
  const [showFingerprint, setShowFingerprint] = useState(false)
  const [cardTheme, setCardTheme] = useState<"blue" | "purple">("blue")

  const handleAddMoney = () => {
    setShowFingerprint(true)
  }

  const toggleTheme = () => {
    setCardTheme(cardTheme === "blue" ? "purple" : "blue")
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4">
        <View>
          <Text className="text-xl font-semibold text-gray-800">Report Sheet</Text>
          <Text className="text-gray-500 text-sm">Relatorios</Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity className="bg-green-100 px-3 py-2 rounded-full flex-row items-center" onPress={toggleTheme}>
            <MaterialIcons name="card-giftcard" size={16} color="#10b981" />
            <Text className="text-green-600 text-xs font-medium ml-1">Reward</Text>
          </TouchableOpacity>
          <TouchableOpacity className="relative">
            <Ionicons name="notifications-outline" size={24} color="#6b7280" />
            <View className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <View className="px-6 mb-6">
          <BalanceCard theme={cardTheme} onAddMoney={handleAddMoney} />
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-around px-6 mb-8">
          <ActionButton icon="add-circle" label="Nova funcionario" onPress={() => {}} />
          <ActionButton icon="person" label="Disponivel" onPress={() => {}} />
          <ActionButton icon="open-outline" label="Retirar" onPress={() => {}} />
          <ActionButton icon="ellipsis-horizontal" label="Mais" onPress={() => {}} />
        </View>

        {/* Transactions */}
        <View className="px-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold text-gray-800">Funcionarios</Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-medium">Ver tudo</Text>
            </TouchableOpacity>
          </View>

          <View className="space-y-1">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </View>
        </View>

        <View className="h-20" />
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-200">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={24} color="#3b82f6" />
          <Text className="text-xs text-blue-500 mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="bar-chart-outline" size={24} color="#6b7280" />
          <Text className="text-xs text-gray-500 mt-1">Funcionarios</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="card-outline" size={24} color="#6b7280" />
          <Text className="text-xs text-gray-500 mt-1"></Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="person-outline" size={24} color="#6b7280" />
          <Text className="text-xs text-gray-500 mt-1">Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Fingerprint Modal */}
      <FingerprintModal visible={showFingerprint} onClose={() => setShowFingerprint(false)} />
    </SafeAreaView>
  )
}
