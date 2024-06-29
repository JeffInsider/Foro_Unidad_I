import React from 'react';
//fireEvent es una función que simula eventos en los componentes
import { render, fireEvent } from '@testing-library/react-native';
import { InputGame } from '../src/presentation/components/InputGame';

//test de renderizado
describe('Componente InputGame', () => {
  //en el it se especifica que se va a probar
  it('debería renderizar correctamente', () => {
    const { getByPlaceholderText, getByText } = render(<InputGame initGame={() => {}} gameOver={false} />);
    //expect es una función que se encarga de verificar que el valor esperado sea igual al valor obtenido
    expect(getByPlaceholderText('Ingresa un número')).toBeTruthy();
    expect(getByText('Jugar!')).toBeTruthy();
  });
});

// Test de interacción
it('debería llamar a la función initGame cuando se presiona el botón "Jugar!"', () => {
  //jest.fn() crea una función mock
  const initGameMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputGame initGame={initGameMock} gameOver={false} />
  );

  const input = getByPlaceholderText('Ingresa un número');
  fireEvent.changeText(input, '5'); // Aseguramos que el campo de texto tenga un valor

  const jugarButton = getByText('Jugar!');
  fireEvent.press(jugarButton);

  //verifica que la función initGameMock haya sido llamada
  expect(initGameMock).toHaveBeenCalled();
});

// Test de funcionalidad
it('debería llamar a la función initGame con el valor de entrada correcto cuando se presiona el botón "Jugar!"', () => {
  const initGameMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <InputGame initGame={initGameMock} gameOver={false} />
  );

  const input = getByPlaceholderText('Ingresa un número');
  const jugarButton = getByText('Jugar!');

  // Simulamos la entrada de texto en el campo de input
  fireEvent.changeText(input, '5');

  // Simulamos el clic en el botón "Jugar!"
  fireEvent.press(jugarButton);

  // Verificamos que initGameMock haya sido llamada con el valor correcto
  expect(initGameMock).toHaveBeenCalledWith(5);
});


