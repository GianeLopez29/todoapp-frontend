import { useState, useEffect } from 'react';
import { categoryService } from '../services/categoryService';
import toast from 'react-hot-toast';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoryService.getCategories();
      setCategories(response.categories);
    } catch (error) {
      toast.error('Error al cargar las categorías');
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (categoryData) => {
    try {
      const response = await categoryService.createCategory(categoryData);
      setCategories(prev => [response.category, ...prev]);
      toast.success('Categoría creada exitosamente');
      return response.category;
    } catch (error) {
      toast.error('Error al crear la categoría');
      throw error;
    }
  };

  const updateCategory = async (id, categoryData) => {
    try {
      const response = await categoryService.updateCategory(id, categoryData);
      setCategories(prev => prev.map(category => 
        category._id === id ? response.category : category
      ));
      toast.success('Categoría actualizada');
      return response.category;
    } catch (error) {
      toast.error('Error al actualizar la categoría');
      throw error;
    }
  };

  const deleteCategory = async (id) => {
    try {
      await categoryService.deleteCategory(id);
      setCategories(prev => prev.filter(category => category._id !== id));
      toast.success('Categoría eliminada');
    } catch (error) {
      toast.error('Error al eliminar la categoría');
      throw error;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    createCategory,
    updateCategory,
    deleteCategory,
    refetch: fetchCategories
  };
};