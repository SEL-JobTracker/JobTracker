import '@/global.css';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import SignIn from './components/siginin/SignIn';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import './global.css';

export default function App() {
  return (
    <GluestackUIProvider>
      {Platform.OS === 'web' ? (
        <SignIn />
      ) : (
        <SafeAreaView>
          <SignIn />
        </SafeAreaView>
      )}
    </GluestackUIProvider>
  );
}
