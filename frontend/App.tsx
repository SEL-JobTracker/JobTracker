import '@/global.css';
import SignIn from './components/siginin/SignIn';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import './global.css';

export default function App() {
  return (
    <GluestackUIProvider>
      <SignIn />
    </GluestackUIProvider>
  );
}
