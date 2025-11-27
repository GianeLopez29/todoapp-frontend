import { useState, useEffect } from 'react';
import { taskService } from '../services/taskService';
import toast from 'react-hot-toast';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await taskService.getTasks();
      setTasks(response.tasks);
    } catch (error) {
      toast.error('Error al cargar las tareas');
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (taskData) => {
    try {
      const response = await taskService.createTask(taskData);
      setTasks(prev => [response.task, ...prev]);
      toast.success('Tarea creada exitosamente');
      return response.task;
    } catch (error) {
      toast.error('Error al crear la tarea');
      throw error;
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const response = await taskService.updateTask(id, taskData);
      setTasks(prev => prev.map(task => 
        task._id === id ? response.task : task
      ));
      toast.success('Tarea actualizada');
      return response.task;
    } catch (error) {
      toast.error('Error al actualizar la tarea');
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(prev => prev.filter(task => task._id !== id));
      toast.success('Tarea eliminada');
    } catch (error) {
      toast.error('Error al eliminar la tarea');
      throw error;
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find(t => t._id === id);
    if (task) {
      await updateTask(id, { ...task, completed: !task.completed });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    createTask,
    updateTask,
    deleteTask,
    toggleTask,
    refetch: fetchTasks
  };
};