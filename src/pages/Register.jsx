import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon, UserIcon, CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
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
      {/* Fondo con elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
        
        {/* Sección derecha - Ejemplos de categorías (más sutil) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block opacity-80 lg:order-3"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white/90 mb-6">Organiza por categorías</h3>
            
            {/* Ejemplo de categoría 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-white/90">Trabajo</span>
                <span className="text-sm text-white/70">12 tareas</span>
              </div>
            </motion.div>

            {/* Ejemplo de categoría 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="font-medium text-white/90">Personal</span>
                <span className="text-sm text-white/70">8 tareas</span>
              </div>
            </motion.div>

            {/* Ejemplo de categoría 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="font-medium text-white/90">Estudios</span>
                <span className="text-sm text-white/70">5 tareas</span>
              </div>
            </motion.div>

            {/* Estadística */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 mt-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white/90">85%</div>
                <div className="text-sm text-white/70">Tareas completadas</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Sección central - Formulario PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="lg:col-span-2 lg:order-1 w-full max-w-lg mx-auto"
        >
          <Card gradient className="p-10 glow-effect relative overflow-hidden">
            {/* Decoración sutil */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full -translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
                >
                  <UserIcon className="w-10 h-10 text-white" />
                </motion.div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Crear Cuenta</h1>
                <p className="text-xl text-gray-600">Únete a TodoApp gratis</p>
                <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-6"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Input
                    label="Nombre Completo"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white border-2 border-gray-200 focus:border-green-500 transition-all duration-300 text-lg py-4"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-white border-2 border-gray-200 focus:border-green-500 transition-all duration-300 text-lg py-4"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <Input
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-white border-2 border-gray-200 focus:border-green-500 transition-all duration-300 text-lg py-4 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-11 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="w-6 h-6" />
                    ) : (
                      <EyeIcon className="w-6 h-6" />
                    )}
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    loading={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-5 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    {loading ? 'Creando cuenta...' : 'Crear Cuenta Gratis'}
                  </Button>
                </motion.div>
              </form>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10 text-center"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500 font-medium">¿Ya tienes cuenta?</span>
                  </div>
                </div>
                <Link 
                  to="/login" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Iniciar Sesión
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