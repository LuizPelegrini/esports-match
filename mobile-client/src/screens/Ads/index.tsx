import { useEffect, useState } from 'react';

import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import { AdsParams } from '../../@types/navigation';
import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, Ad } from '../../components/DuoCard';

export function Ads() {
  const [ads, setAds] = useState<Ad[]>([]);

  const route = useRoute();
  const params = route.params as AdsParams;

  const navigation = useNavigation();

  useEffect(() => {
    fetch(`http://192.168.101.3:3333/games/${params.id}/ads`)
      .then(response => response.json())
      .then(data => setAds(data))
  }, []);

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20}/>
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.emptyRight}/>
        </View>
        
        <Image source={{ uri: params.bannerUrl }} style={styles.banner} resizeMode="cover"/>

        <Heading title={params.title} subtitle="Connect and start playing!"/>

        <FlatList
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          data={ads}
          keyExtractor={ad => ad.id} 
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => 
            <DuoCard
              key={item.id}
              data={item}
              onConnect={() => {}}
            />
          }
        />
      </SafeAreaView>
    </Background>
  );
}