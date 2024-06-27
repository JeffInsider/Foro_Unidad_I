import {Pressable, Text, View} from 'react-native';
import { useGame } from '../hooks/useGame';
import { styles } from '../../config/app_theme';
import { MessageGame } from '../components/MessageGame';
import { InputGame } from '../components/InputGame';

export const GameScreen = () => {
    const {message, gamePlay, gameOver, resetGame} = useGame();

  return (
    <View style={styles.container}>
      <MessageGame message={message} />
      <InputGame initGame={gamePlay} gameOver={gameOver} />
      <Pressable onPress={resetGame} style={styles.button}>
        <Text style={styles.buttonText}>Reiniciar juego</Text>
      </Pressable>
    </View>
  );
};
