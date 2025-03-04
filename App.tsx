import ConfigureWrapper from '@/components/configureWrapper';
import { StatusBar } from 'expo-status-bar';
import Main from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <ConfigureWrapper>
      <Main />
      <StatusBar style="auto" />
    </ConfigureWrapper>
  );
}