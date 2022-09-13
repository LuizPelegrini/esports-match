import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { THEME } from '../../theme';

export interface GamingCardProps extends TouchableOpacityProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
}

export function GamingCard({ id, name, ads, cover, ...rest }: GamingCardProps){
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground style={styles.cover} source={cover}>
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>
                        { name }
                    </Text>
                    <Text style={styles.ads}>
                        { ads } ads
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}