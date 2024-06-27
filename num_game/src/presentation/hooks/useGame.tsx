import { useState } from 'react';
import {Text, View} from 'react-native';

export const useGame = (random: number = Math.floor(Math.random()*10)+1) => {

    const [num, setNum] = useState(random);
    const [message, setMensage] = useState('Empezar Juego')
    const [gameOver, setGameOver] = useState(false)

    const gamePlay = (game: number) => {
        if (game === num) {
            setMensage('Ganaste!, el numero era: '+ num)
            setGameOver(true)
        }else if (game < num) {
            setMensage('El número es mayor')
        }else {
            setMensage('El número es menor')
        }
    }

    const resetGame = () => {
        setNum(Math.floor(Math.random()*10)+1)
        setMensage('Empezar Juego')
        setGameOver(false)
    }

  return {
    //variables
    message,
    gameOver,
    //methods
    gamePlay,
    resetGame,
  };
};
