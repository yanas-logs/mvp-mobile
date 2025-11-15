import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { loginUser } from "../lib/auth/login";
import { useAuth } from "../store/auth/AuthContext";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) {
    router.replace("/");
  }

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginUser(email, password);
      router.replace("/");
    } catch (err: any) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: 24, flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 28, fontFamily: "Quicksand-Bold", marginBottom: 20 }}>
        Login
      </Text>

      <Text style={{ fontFamily: "Quicksand-Medium" }}>Email</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          marginBottom: 16,
          fontFamily: "Quicksand-Regular",
        }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Text style={{ fontFamily: "Quicksand-Medium" }}>Password</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          marginBottom: 16,
          fontFamily: "Quicksand-Regular",
        }}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "black",
          padding: 14,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Quicksand-Bold",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
