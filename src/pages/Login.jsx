import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/login', {
        name: name,
        password: password
      });
      console.log('Réponse du serveur:', response.data);
      navigate('/store');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'nom ou mot de passe incorrect');
      } else {
        console.error('Erreur lors de la connexion:', error);
        setError('nom ou mot de passe incorrect');
      }
      setName('');
      setPassword('');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
    },
    form: {
      width: '80%',
      maxWidth: '400px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #681111',
    },
    buttonSubmit: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'rgb(196, 16, 16)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonSubmitHover: {
      backgroundColor: '#a5c0dd',
    },
    error: {
      color: 'rgb(180, 19, 19)',
      fontSize: '14px',
      marginTop: '5px',
    },
    body: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      margin: '0',
      padding: '0',
      backgroundColor: '#bdc0bd',
    },
    h2: {
      fontSize: '56px',
      color: '#e91d0ff8',
      marginBottom: '20px',
    },
    mapage: {
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    h4: {
      fontSize: '18px',
      color: '#333',
      marginTop: '20px',
    },
  };

  return (
    <>
    <div style={{ backgroundImage: "url(/i4.jpg)", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }} className='mapage'>
    <div style={styles.mapage}>
      <h2 style={styles.h2}>Connexion</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nom:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </div>
        <button type="submit" style={styles.buttonSubmit}>Se connecter</button>
        <h4 style={styles.h4}>vous n'avez pas encore de compte?</h4>
        <button type="button" onClick={() => navigate('/Inscrire')} style={styles.buttonSubmit}>S'inscrire</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;
