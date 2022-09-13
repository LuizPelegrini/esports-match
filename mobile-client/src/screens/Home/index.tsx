import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GamingCard } from '../../components/GamingCard';
import { GAMES } from '../../utils/games';

export function Home(){
    return (
        <View style={styles.container}>
            <Image 
                source={logoImg}
                style={styles.logo}
            />

            <Heading 
                title='Find your duo!'
                subtitle='Select the game you want to play...'
            />

            <FlatList
                contentContainerStyle={styles.contentList}
                data={GAMES}
                keyExtractor={item => item.id} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => 
                    <GamingCard 
                        id={item.id}
                        name={item.name}
                        cover={item.cover}
                        ads={item.ads}
                    />
                }
            />
           
        </View>
    );
}