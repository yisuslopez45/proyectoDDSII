import Login from '../pages/Login/Login'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login Component', () => {
    beforeEach(() => {
        
        delete window.location;
        window.location = { href: '' }; 
    });

    test('calls handleLogin when both username and password are provided', () => {
        render(<Login />);

        // Simula la entrada de datos en los campos de usuario y contraseña usando getByPlaceholderText para evitar conflicto
        fireEvent.change(screen.getByPlaceholderText(/ingrese su usuario/i), { target: { value: 'user' } });
        fireEvent.change(screen.getByPlaceholderText(/ingrese su contraseña/i), { target: { value: 'pass' } });

        // Simula el clic en el botón de ingreso
        fireEvent.click(screen.getByText(/ingresar/i));

        // Comprueba si la redirección al Dashboard fue llamada
        expect(window.location.href).toBe('/Dashboard');
    });

    test('shows an alert when fields are empty', () => {
       
        global.alert = vi.fn(); 

        render(<Login />);

        // Simula la presentación del formulario sin datos
        fireEvent.click(screen.getByText(/ingresar/i));

        // Comprueba si se llamó a alert con el mensaje esperado
        expect(global.alert).toHaveBeenCalledWith('Por favor, complete todos los campos.');
    });
});