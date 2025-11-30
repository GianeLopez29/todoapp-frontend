import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(formData);
      toast.success('Bienvenido de vuelta');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error al iniciar sesión');
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
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="w-full"
    >
      <div className="floating-card p-12">
        <div className="text-center mb-12">
          <h2 className="text-heading text-graphite mb-3">Iniciar Sesión</h2>
          <p className="text-body text-gray-600">Accede a tu espacio de trabajo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
            transition={{ duration: 0.4, delay: 0.3 }}
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
            transition={{ duration: 0.4, delay: 0.4 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center space-x-3 py-4"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-ivory border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Acceder</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="my-12"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-ivory text-gray-500 text-caption font-medium">
                ¿Nuevo en TodoApp?
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Link
            to="/register"
            className="btn-secondary w-full flex items-center justify-center space-x-3 py-4"
          >
            <span>Crear Cuenta</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginForm;