import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm';
import styles from './Container.module.css';

function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="w-16 h-16 bg-graphite rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-ivory rounded-lg"></div>
            </div>
            <div>
              <h1 className="text-display text-graphite mb-4">TodoApp</h1>
              <p className="text-subtitle text-gray-600 max-w-md">
                Gestión de tareas elegante y minimalista para profesionales modernos
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-2 h-2 bg-steel-blue rounded-full"></div>
              <div>
                <h3 className="text-title text-graphite mb-2">Diseño Intuitivo</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Interfaz limpia y elegante que se adapta a tu flujo de trabajo
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-2 h-2 bg-petrol-green rounded-full"></div>
              <div>
                <h3 className="text-title text-graphite mb-2">Sincronización Total</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Accede a tus tareas desde cualquier dispositivo, siempre actualizado
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-2 h-2 bg-gold-soft rounded-full"></div>
              <div>
                <h3 className="text-title text-graphite mb-2">Productividad Avanzada</h3>
                <p className="text-body text-gray-600 max-w-sm">
                  Herramientas inteligentes para optimizar tu tiempo y energía
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <aside className={styles.formPanel}>
        <LoginForm />
      </aside>
    </main>
  );
}

export default Login;