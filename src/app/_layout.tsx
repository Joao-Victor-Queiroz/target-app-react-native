import { Suspense } from "react";
import { Stack } from "expo-router";
import { colors } from "@/theme/colors";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Loading from "@/components/Loading";
import { useEffect } from "react";

import { SQLiteProvider } from "expo-sqlite";

import { migrate } from "@/database/migrate";

export default function Layout() {
  // return <Slot /> //pega todas as rotas da pasta app e repassa para o slot
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontError) {
      console.error("ERRO AO CARREGAR FONTES:", fontError);
    }
    if (fontsLoaded) {
      console.log("FONTES CARREGADAS");
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider databaseName="target.db" onInit={migrate} useSuspense>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white },
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
