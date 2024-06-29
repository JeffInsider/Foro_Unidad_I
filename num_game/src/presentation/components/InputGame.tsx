import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from '../../config/app_theme';
import { useState } from 'react';

interface Props {
    initGame: (item: number) => void;
    gameOver: boolean;
}

export const InputGame = ({ initGame, gameOver }: Props) => {
    const [value, setValue] = useState('');

    //este metodo se encarga de manejar la lógica de agregar un nuevo juego
    const handleAdd = () => {
        //game es el valor ingresado por el usuario y 10 es la base del sistema numérico
        const game = parseInt(value, 10);
        //isNaN es una función que devuelve true si el valor es NaN (Not a Number)
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
