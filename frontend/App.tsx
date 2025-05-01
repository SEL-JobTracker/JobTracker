import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import './global.css';
import SignUp from "./components/SignUp/SignUp";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <GluestackUIProvider mode="light">
      {Platform.OS === 'web' ? <SignUp /> : <SafeAreaView><SignUp/></SafeAreaView>}
    </GluestackUIProvider>
  );
}
