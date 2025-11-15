import { Tabs, Redirect } from "expo-router";
import { useAuth } from "../../store/auth/AuthContext";

export default function TabsLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) return <Redirect href="/login" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      
    </Tabs>
  );
}
