import Auth from "@/components/auth";
import supabase from "@/utils/supabase";
import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

type Todo = {
  id: string;
  title: string;
  is_complete: boolean;
  created_at: string;
};

export default function Index() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch todos on component mount

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold text-center p-2 bg-gray-100 shadow-md mb-4">
        Sign in:
      </Text>
      <Auth />
    </View>
  );
}
