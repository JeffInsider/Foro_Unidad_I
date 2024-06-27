import { SafeAreaView, Text, View } from "react-native"
import { GameScreen } from "./presentation/screens/GameScreen"
import { styles } from "./config/app_theme"

export const App = () => {
  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
};