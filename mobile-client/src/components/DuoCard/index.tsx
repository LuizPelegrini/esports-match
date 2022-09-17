import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';
import { GameController } from 'phosphor-react-native'

export interface Ad {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
  weekDays: string[];
}

interface DuoCardProps {
  data: Ad;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Name" value={data.name}/>
      <DuoInfo label="Experience" value={`${data.yearsPlaying} years`}/>
      <DuoInfo 
        label="Availability"
        value={`${data.weekDays.length} days \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo 
        label="Voice Channel?"
        value={data.useVoiceChannel ? 'Yes' : 'No'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />
      <TouchableOpacity
        style={styles.connectButton}
        onPress={onConnect}
      >
        <GameController
          size={20}
          color={THEME.COLORS.TEXT}
        />
        <Text
          style={styles.connectButtonText}>
          Connect
        </Text>
      </TouchableOpacity>
    </View>
  );
}