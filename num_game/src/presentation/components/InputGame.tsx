import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../../config/app_theme';
import { useState } from 'react';

interface Props {
    initGame: (item: number) => void;
    gameOver: boolean;
}

export const InputGame = ({ initGame, gameOver }: Props) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        const game = parseInt(value, 10);
        if (!isNaN(game)) {
            initGame(game);
            setValue('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Ingresa un número"
                value={value}
                onChangeText={setValue}
                keyboardType="numeric"
                editable={!gameOver}
            />
            <Pressable onPress={handleAdd} style={styles.button}>
                <Text style={styles.buttonText}>Jugar!</Text>
            </Pressable>
        </View>
    );
};
