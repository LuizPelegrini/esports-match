import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GamingCard, GamingCardProps } from '../../components/GamingCard';
import { Background } from '../../components/Background';

export function Home(){
  const [games, setGames] = useState<GamingCardProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.101.3:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  function handleOpenGame({ id, bannerUrl, title }: GamingCardProps){
    navigation.navigate('ads', { id, bannerUrl, title });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
          data={games}
          keyExtractor={game => game.id} 
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => 
            <GamingCard 
              id={item.id}
              title={item.title}
              bannerUrl={item.bannerUrl}
              _count={item._count}
              onPress={() => handleOpenGame(item)}
            />
          }
      />
      </SafeAreaView>
    </Background>
  );
}