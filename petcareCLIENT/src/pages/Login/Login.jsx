import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Login.css';
import dogImage from '../../assets/img/Perrito.jpg';

const Login = ({ onLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isTypingPassword, setIsTypingPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleLogin = () => {
      // Redirigir al dashboard
      if (onLogin) {
        onLogin('/Dashboard'); // Llama a la función onLogin
      } else {
        window.location.href = '/Dashboard';
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const username = form.elements.username?.value; // Accede de forma segura
      const password = form.elements.password?.value; // Accede de forma segura
  
      // Verificar que los campos no estén vacíos
      if (username && password) {
        handleLogin();
        form.reset(); // Limpia el formulario
      } else {
        alert('Por favor, complete todos los campos.');
      }
    };
  
    return (
      <div className="login-container">
        <h2>¡BIENVENIDO!</h2>
        <img 
          src={dogImage} 
          alt="perrito"
          className={`dog-image ${isTypingPassword ? 'dog-hide-eyes' : ''}`} 
        />
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input 
              type="text" 
              name="username" // Asegúrate de que 'name' esté correctamente definido
              placeholder="Ingrese su usuario"
            />
          </label>
  
          <label>
            Contraseña:
            <input
              type={showPassword ? 'text' : 'password'}
              name="password" // Asegúrate de que 'name' esté correctamente definido
              placeholder="Ingrese su contraseña"
              onFocus={() => setIsTypingPassword(true)}
              onBlur={() => setIsTypingPassword(false)}
            />
          </label>
  
          <label className="password-toggle">
            <input 
              type="checkbox" 
              onClick={togglePasswordVisibility} 
            />
            {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
          </label>
  
          <button type="submit">Ingresar</button>
          <button type="button">Registrarse</button>
        </form>
      </div>
    );
  };
  
  export default Login;