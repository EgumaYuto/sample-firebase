import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
    return (
        <div className={styles.container}>
            <form>
                <label>
                    email
                    <input type="text"></input>
                </label>
                <label>
                    password
                    <input type="password"></input>
                </label>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Login