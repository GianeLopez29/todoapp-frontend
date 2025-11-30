import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusIcon, 
  CheckCircleIcon, 
  ClockIcon,
  TrashIcon,
  PencilIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useTasks } from '../hooks/useTasks';
import { useCategories } from '../hooks/useCategories';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Input from '../components/Input';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { tasks, loading, createTask, updateTask, deleteTask, toggleTask } = useTasks();
  const { categories } = useCategories();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: ''
  });

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await updateTask(editingTask._id, formData);
      } else {
        await createTask(formData);
      }
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      // Error handled in hook
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      category: ''
    });
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    let formattedDate = '';
    if (task.dueDate) {
      try {
        formattedDate = format(new Date(task.dueDate), 'yyyy-MM-dd');
      } catch (error) {
        console.error('Error formatting date:', error);
        formattedDate = '';
      }
    }
    setFormData({
      title: task.title,
      description: task.description || '',
      dueDate: formattedDate,
      category: task.category?._id || ''
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (taskId) => {
    if (window.confirm('¿Estás seguro de eliminar esta tarea?')) {
      await deleteTask(taskId);
    }
  };

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-white text-lg">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center lg:text-left"
        >
          <div className="relative">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 floating-animation">
              Dashboard
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4 mx-auto lg:mx-0"></div>
            <p className="text-xl text-white/90 font-light">Gestiona tus tareas con estilo y eficiencia</p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card gradient className="p-8 card-hover glow-effect">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Total Tareas</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stats.total}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{width: '100%'}}></div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card gradient className="p-8 card-hover glow-effect">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Completadas</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {stats.completed}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500" 
                  style={{width: `${stats.total > 0 ? (stats.completed / stats.total) * 100 : 0}%`}}
                ></div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card gradient className="p-8 card-hover glow-effect">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">Pendientes</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {stats.pending}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500" 
                  style={{width: `${stats.total > 0 ? (stats.pending / stats.total) * 100 : 0}%`}}
                ></div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              Todas
            </Button>
            <Button
              variant={filter === 'pending' ? 'primary' : 'secondary'}
              onClick={() => setFilter('pending')}
              size="sm"
            >
              Pendientes
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'secondary'}
              onClick={() => setFilter('completed')}
              size="sm"
            >
              Completadas
            </Button>
          </div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Nueva Tarea
          </Button>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <motion.div
              key={task._id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <Card gradient className={`p-6 h-full relative overflow-hidden ${
                task.completed ? 'opacity-75' : ''
              }`}>
                {/* Indicador de estado */}
                <div className={`absolute top-0 left-0 w-full h-1 ${
                  task.completed 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                    : 'bg-gradient-to-r from-blue-400 to-purple-500'
                }`}></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleTask(task._id)}
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        task.completed
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white shadow-lg'
                          : 'border-gray-300 hover:border-green-500 hover:bg-green-50'
                      }`}
                    >
                      {task.completed && <CheckCircleIcon className="w-5 h-5" />}
                    </motion.button>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${
                        task.completed 
                          ? 'line-through text-gray-500' 
                          : 'text-gray-900 hover:text-blue-600'
                      }`}>
                        {task.title}
                      </h3>
                      
                      {task.category && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full text-white shadow-sm"
                          style={{ 
                            backgroundColor: task.category.color,
                            boxShadow: `0 4px 12px ${task.category.color}40`
                          }}
                        >
                          {task.category.name}
                        </motion.span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEdit(task)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(task._id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {task.description && (
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg border-l-4 border-blue-400">
                      {task.description}
                    </p>
                  </div>
                )}

                {task.dueDate && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                      <CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="font-medium">
                        {format(new Date(task.dueDate), 'dd MMM yyyy', { locale: es })}
                      </span>
                    </div>
                    
                    {/* Indicador de prioridad por fecha */}
                    <div className={`w-3 h-3 rounded-full ${
                      new Date(task.dueDate) < new Date() && !task.completed
                        ? 'bg-red-400 animate-pulse'
                        : new Date(task.dueDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && !task.completed
                        ? 'bg-yellow-400'
                        : 'bg-green-400'
                    }`}></div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <Card className="p-12 text-center">
            <ClockIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {filter === 'all' ? 'No hay tareas' : `No hay tareas ${filter === 'completed' ? 'completadas' : 'pendientes'}`}
            </h3>
            <p className="text-gray-500">
              {filter === 'all' ? 'Crea tu primera tarea para comenzar' : 'Cambia el filtro para ver otras tareas'}
            </p>
          </Card>
        )}

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            resetForm();
          }}
          title={editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Título"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Título de la tarea"
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descripción opcional"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
            </div>

            <Input
              label="Fecha límite"
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
              >
                <option value="">Sin categoría</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button type="submit" className="flex-1">
                {editingTask ? 'Actualizar' : 'Crear'}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;