import { Text, View } from 'react-native';
import { styles } from '../../config/app_theme';

interface Props {
    message: string;
}

export const MessageGame = ({message}: Props) => {
    return (
        <View>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};
