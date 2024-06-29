// __tests__/MessageGame.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { MessageGame } from '../src/presentation/components/MessageGame';

//test de renderizado
describe('MessageGame Component', () => {
  it('debería renderizar correctamente con el mensaje proporcionado', () => {
    const { getByText } = render(<MessageGame message="Mensaje de prueba" />);
    //expect es una función que se encarga de verificar que el valor esperado sea igual al valor obtenido
    expect(getByText('Mensaje de prueba')).toBeTruthy();
  });
});
 //no hay test de interaccion ya que no hay interaccion en este componente


//test de funcionalidad
describe('Funcionalidad del componente MessageGame', () => {
  it('debería renderizar correctamente un mensaje vacío', () => {
    //renderiza con un mensaje vacío
    const { getByText } = render(<MessageGame message="" />);
    const messageElement = getByText('');
    expect(messageElement).toBeDefined();
  });

  it('debería manejar correctamente mensajes largos', () => {
    //renderiza con un mensaje largo
    const longMessage = 'Este es un mensaje de prueba muy largo para verificar la funcionalidad del componente MessageGame en diferentes escenarios.';
    const { getByText } = render(<MessageGame message={longMessage} />);
    const messageElement = getByText(longMessage);
    expect(messageElement).toBeDefined();
  });
});
