import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, DollarSign } from 'lucide-react-native';

const salarySchema = z.object({
  employeeName: z.string().min(1, 'Nome do funcionário é obrigatório'),
  salary: z.number().min(0, 'Salário deve ser um número positivo'),
});

type SalaryFormData = z.infer<typeof salarySchema>;

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm<SalaryFormData>({
    resolver: zodResolver(salarySchema),
  });

  const onSubmit = (data: SalaryFormData) => {
    Alert.alert('Dados do Salário', `Nome: ${data.employeeName}, Salário: ${data.salary}`);
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <StatusBar style="auto" />
      <View className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <Text className="text-2xl font-bold mb-6 text-center text-gray-800">Gerenciamento de Salário</Text>

        <View className="mb-4">
          <Text className="text-gray-700 text-base mb-2">Nome do Funcionário:</Text>
          <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <User size={20} color="#6B7280" className="mr-2" />
            <Controller
              control={control}
              name="employeeName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="flex-1 text-gray-800 text-base"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Digite o nome do funcionário"
                />
              )}
            />
          </View>
          {errors.employeeName && <Text className="text-red-500 text-sm mt-1">{errors.employeeName.message}</Text>}
        </View>

        <View className="mb-6">
          <Text className="text-gray-700 text-base mb-2">Salário:</Text>
          <View className="flex-row items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <DollarSign size={20} color="#6B7280" className="mr-2" />
            <Controller
              control={control}
              name="salary"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  className="flex-1 text-gray-800 text-base"
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(Number(text))}
                  value={value?.toString()}
                  placeholder="Digite o salário"
                  keyboardType="numeric"
                />
              )}
            />
          </View>
          {errors.salary && <Text className="text-red-500 text-sm mt-1">{errors.salary.message}</Text>}
        </View>

        <Button title="Salvar Salário" onPress={handleSubmit(onSubmit)} color="#4F46E5" />
      </View>
    </View>
  );
}