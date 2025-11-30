import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
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
    setLoading(true);

    try {
      await register(formData);
      toast.success('Cuenta creada. Revisa tu email para verificar.');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error al registrarse');
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
    <div className="min-h-screen bg-gradient-to-br from-ivory to-sand-light flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Panel Izquierdo - Formulario Premium */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
        >
          <div className="floating-card p-12">
            {/* Header Minimalista */}
            <div className="text-center mb-12">
              <h2 className="text-heading text-graphite mb-3">Crear Cuenta</h2>
              <p className="text-body text-gray-600">Únete a TodoApp</p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="block text-caption text-gray-500 mb-3 font-medium uppercase tracking-wide">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input-premium w-full"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block text-caption text-gray-500 mb-3 font-medium uppercase tracking-wide">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="input-premium w-full"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative"
              >
                <label className="block text-caption text-gray-500 mb-3 font-medium uppercase tracking-wide">
                  Contraseña
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-premium w-full pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-12 text-gray-400 hover:text-gray-600 micro-hover p-1"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent w-full flex items-center justify-center space-x-3 py-4"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-ivory border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Crear Cuenta</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            {/* Separador Elegante */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="my-12"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-ivory text-gray-500 text-caption font-medium">
                    ¿Ya tienes cuenta?
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Link a Login */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Link
                to="/login"
                className="btn-secondary w-full flex items-center justify-center space-x-3 py-4"
              >
                <span>Iniciar Sesión</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Panel Derecho - Beneficios Premium */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden lg:block space-y-12 order-1 lg:order-2"
        >
          {/* Mensaje Principal */}
          <div className="space-y-6">
            <h1 className="text-display text-graphite mb-6">
              Productividad
              <span className="block text-accent">Redefinida</span>
            </h1>
            <p className="text-subtitle text-gray-600 max-w-md">
              Únete a profesionales que han transformado su manera de trabajar con TodoApp
            </p>
          </div>

          {/* Beneficios Elegantes */}
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-steel-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-steel-blue rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-title text-graphite mb-2">Organización Inteligente</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Sistema avanzado de categorización y priorización automática
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-petrol-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-petrol-green rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-title text-graphite mb-2">Sincronización Perfecta</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Acceso instantáneo desde cualquier dispositivo, siempre actualizado
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-gold-soft/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-gold-soft rounded-lg"></div>
              </div>
              <div>
                <h3 className="text-title text-graphite mb-2">Análisis Avanzado</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Insights personalizados para optimizar tu productividad
                </p>
              </div>
            </div>
          </div>

          {/* Estadística Premium */}
          <div className="pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-graphite mb-2">Gratis</div>
              <div className="text-body text-gray-600">Para siempre, sin límites</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;