import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GamingCardProps extends TouchableOpacityProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  };
}

export function GamingCard({ id, title, _count, bannerUrl, ...rest }: GamingCardProps){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            { title }
          </Text>
          <Text style={styles.ads}>
            { _count.ads } ads
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}