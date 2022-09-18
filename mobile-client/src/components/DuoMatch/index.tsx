import { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';

import { Heading } from '../Heading';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps){
  const [isCopying, setIsCopying] = useState(false); 

  async function handleCopyUserDiscordToClipboard(){
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copied!', 'Discord id copied to your clipboard.')
    setIsCopying(false);
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType='fade'
      {...rest} 
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle 
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold"
          />

          <Heading
            style={{ alignItems: 'center', marginTop: 24 }}
            title="Let's play!"
            subtitle="Start playing now!"
          />

          <Text style={styles.label}>
            Add in Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyUserDiscordToClipboard}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              { isCopying ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}