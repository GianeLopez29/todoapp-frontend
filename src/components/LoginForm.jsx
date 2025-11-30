import styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form className={styles.form} onSubmit={(e)=>e.preventDefault()}>
      <h2>Iniciar Sesión</h2>
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" placeholder="tu@ejemplo.com" />
      <label className={styles.label}>Contraseña</label>
      <input className={styles.input} type="password" placeholder="••••••••" />
      <button className={styles.submit} type="submit">Entrar</button>
    </form>
  );
}