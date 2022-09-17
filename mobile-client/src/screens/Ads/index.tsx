import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useRoute } from '@react-navigation/native';

import { AdsParams } from '../../@types/navigation';
import { styles } from './styles';

export function Ads() {
  const route = useRoute();
  const params = route.params as AdsParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}