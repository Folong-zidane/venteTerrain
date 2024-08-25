import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const Register= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users', {
        name: name,
        email: email,
        password: password
      });
      console.log('Réponse du serveur:', response.data);
      setName('');
      setEmail('');
      setPassword('');
      navigate('/store');
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || {});
      } else {
        console.error('Erreur lors de la requête:', error);
      }
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
    <div style={{ ...styles.mapage, backgroundImage: "url(/c22.jpg)"

    }}>
      <h2 style={styles.h2}>Inscription</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nom:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
          {errors.name && <p style={styles.error}>{errors.name[0]}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
          {errors.email && <p style={styles.error}>{errors.email[0]}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          {errors.password && <p style={styles.error}>{errors.password[0]}</p>}
        </div>
        <button type="submit" style={styles.buttonSubmit}>S'inscrire</button>
      </form>
      <button onClick={() => navigate('/')} style={styles.buttonSubmit}>Retour</button>
    </div>
  );
}

export default Register;
