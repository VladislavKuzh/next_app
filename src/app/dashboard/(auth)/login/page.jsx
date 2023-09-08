"use client"

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import styles from './page.module.css'

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status == 'loading') {
    return <p>Loading</p>
  }
  if (session.status == 'authenticated') {
    router?.push('dashboard')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', {email, password});
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <span className={styles.or}>- OR -</span>
      <button onClick={()=>signIn("google")} className={styles.button} style={{'backgroundColor': 'rgba(228, 97, 50, 0.72)'}}>Login with Google</button>
      <Link className={styles.link} href="/dashboard/register">
        Register
      </Link>
    </div>
  )
}

export default Login