import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GamingCard, GamingCardProps } from '../../components/GamingCard';

export function Home(){
  const [games, setGames] = useState<GamingCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.101.3:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

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
          />
        }
    />
    </View>
  );
}