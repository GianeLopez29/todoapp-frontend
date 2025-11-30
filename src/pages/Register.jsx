import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, UserIcon, ShieldCheckIcon, BoltIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
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
      toast.success('¡Registro exitoso! Revisa tu email para verificar tu cuenta.');
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
    <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Sección izquierda - Información */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block text-white"
        >
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Únete a la
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Revolución
                </span>
                de la Productividad
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Miles de usuarios ya confían en TodoApp para organizar su vida. 
                Únete a nuestra comunidad y descubre una nueva forma de ser productivo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Seguro</h3>
                    <p className="text-sm text-white/70">Tus datos están protegidos con encriptación de nivel bancario</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <BoltIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Súper Rápido</h3>
                    <p className="text-sm text-white/70">Interfaz optimizada para máxima velocidad y eficiencia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hecho con Amor</h3>
                    <p className="text-sm text-white/70">Diseñado pensando en tu experiencia y comodidad</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Sección derecha - Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          <Card gradient className="p-8 lg:p-10 glow-effect relative overflow-hidden">
            {/* Decoración del formulario */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform -rotate-12"
                >
                  <UserIcon className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Crea tu cuenta!</h2>
                <p className="text-gray-600">Únete a TodoApp y transforma tu productividad</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Input
                    label="Nombre Completo"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white/70 border-2 border-gray-200 focus:border-green-500 focus:bg-white transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-white/70 border-2 border-gray-200 focus:border-green-500 focus:bg-white transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <Input
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-white/70 border-2 border-gray-200 focus:border-green-500 focus:bg-white transition-all duration-300 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    loading={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    {loading ? 'Creando cuenta...' : 'Crear Cuenta Gratis'}
                  </Button>
                </motion.div>
              </form>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">¿Ya tienes cuenta?</span>
                  </div>
                </div>
                <Link 
                  to="/login" 
                  className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium hover:underline transition-colors"
                >
                  Inicia sesión aquí
                </Link>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;