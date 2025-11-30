import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor ingresa un email válido');
      return;
    }
    
    // Validación de contraseña
    if (formData.password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    setLoading(true);

    try {
      await register(formData);
      toast.success('Cuenta creada exitosamente. Revisa tu email para verificar tu cuenta.');
      navigate('/verify-email');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error al crear la cuenta');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{minHeight: '100vh', background: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
      <div style={{maxWidth: '800px', width: '100%', display: 'flex', gap: '48px', alignItems: 'center'}}>
        
        {/* Texto con diseño */}
        <div style={{flex: '1', textAlign: 'center'}}>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '700',
            color: 'var(--graphite)',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, var(--steel-blue), var(--petrol-green))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Únete a TodoApp
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            color: 'var(--gray-600)',
            lineHeight: '1.5',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            Crea tu cuenta y comienza a organizar tus tareas de manera profesional
          </p>
        </div>

        {/* Formulario funcional */}
        <div style={{flex: '1', maxWidth: '400px'}}>
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            border: '1px solid var(--gray-200)'
          }}>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '8px'}}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--gray-300)',
                    fontSize: '15px',
                    background: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  required
                />
              </div>

              <div>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '8px'}}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@ejemplo.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--gray-300)',
                    fontSize: '15px',
                    background: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  required
                />
              </div>

              <div style={{position: 'relative'}}>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '8px'}}>
                  Contraseña
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    paddingRight: '48px',
                    borderRadius: '10px',
                    border: '1px solid var(--gray-300)',
                    fontSize: '15px',
                    background: 'white',
                    transition: 'all 0.2s ease'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '36px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-500)',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  {showPassword ? <EyeSlashIcon style={{width: '20px', height: '20px'}} /> : <EyeIcon style={{width: '20px', height: '20px'}} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '10px',
                  background: loading ? 'var(--gray-400)' : 'linear-gradient(135deg, var(--steel-blue), var(--petrol-green))',
                  color: 'white',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {loading ? (
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid white',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                ) : (
                  'Crear Cuenta'
                )}
              </button>

              <div style={{textAlign: 'center', marginTop: '16px'}}>
                <span style={{color: 'var(--gray-600)', fontSize: '14px'}}>¿Ya tienes cuenta? </span>
                <Link to="/login" style={{color: 'var(--steel-blue)', textDecoration: 'none', fontWeight: '500'}}>Iniciar Sesión</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;