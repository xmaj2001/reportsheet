import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export interface Transaction {
  id: number
  type: string
  amount: string
  time: string
  status: string
  icon: keyof typeof Ionicons.glyphMap
  color: string
}

interface TransactionItemProps {
  transaction: Transaction
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const getIconColor = () => {
    if (transaction.color.includes("blue")) return "#3b82f6"
    if (transaction.color.includes("red")) return "#ef4444"
    if (transaction.color.includes("green")) return "#10b981"
    return "#6b7280"
  }

  return (
    <TouchableOpacity className="flex-row items-center justify-between py-4 px-4 bg-white rounded-xl mb-2">
      <View className="flex-row items-center flex-1">
        <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-3">
          <Ionicons name={`person`} size={20} color={'black'} />
        </View>
        <View className="flex-1">
          <Text className="font-medium text-gray-800">{transaction.type}</Text>
          <Text className="text-gray-500 text-sm">{(new Date(Date.now()).toLocaleString())}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className={`font-semibold text-black`}>{transaction.amount}</Text>
        <Text className="text-gray-500 text-sm">{transaction.status}</Text>
      </View>
    </TouchableOpacity>
  )
}
