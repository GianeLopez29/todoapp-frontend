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
          <div className="space-y-8">
            <div className="w-12 h-12 bg-gradient-to-br from-steel-blue to-petrol-green rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-ivory" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <div>
              <h1 style={{fontSize: 'clamp(22px, 3.2vw, 36px)', fontWeight: '600', color: 'var(--graphite)', marginBottom: '12px', letterSpacing: '-0.02em'}}>TodoApp</h1>
              <p style={{fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'var(--gray-600)', maxWidth: '320px', lineHeight: '1.5'}}>
                Gestión minimalista de tareas
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-steel-blue rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 style={{fontSize: '16px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '4px'}}>Diseño Intuitivo</h3>
                <p style={{fontSize: '14px', color: 'var(--gray-600)', maxWidth: '280px', lineHeight: '1.4'}}>
                  Interfaz limpia y elegante
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-petrol-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 style={{fontSize: '16px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '4px'}}>Sincronización Total</h3>
                <p style={{fontSize: '14px', color: 'var(--gray-600)', maxWidth: '280px', lineHeight: '1.4'}}>
                  Acceso desde cualquier dispositivo
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-gold-soft rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 style={{fontSize: '16px', fontWeight: '500', color: 'var(--graphite)', marginBottom: '4px'}}>Productividad Avanzada</h3>
                <p style={{fontSize: '14px', color: 'var(--gray-600)', maxWidth: '280px', lineHeight: '1.4'}}>
                  Herramientas para optimizar tu tiempo
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