import React from 'react';
import styles from './styles.module.css';
import '../../assets/container.css';

import {Logo} from '../../components';
import {IoMailOutline, IoLockClosed} from 'react-icons/io5';

const CreateAccount: React.FC = () => {
    return (
        <div className={"top-container"}>
            <section className='container'>
                <Logo />

                <div>
                    <h1 className={styles.title}>Crear cuenta</h1>
                    <span className={styles.subtitle}>
                        ¿Ya tienes una cuenta? <a href={"#a"} className={styles.login}>Inicia sesion</a>
                    </span>
                </div>

                <div className={styles.infoCard}>
                    <span className={styles.infoCardText}>
                        Si piensas probar esta funcionalidad debes usar un correo electronico real
                        al que tengas acceso, puesto que un correo sera enviado al mismo para 
                        activar tu cuenta
                    </span>
                </div>

                <form action="">
                    <div className={styles.textInput}>
                        <IoMailOutline color='#9ca1ab' size={22} />
                        <input type="text" placeholder='Correo electronico' />
                    </div>

                    <div className={styles.textInput}>
                        <IoLockClosed color='#9ca1ab' size={22} />
                        <input type="password" placeholder='Contraseña' />
                    </div>

                    <div className={styles.textInput}>
                        <IoLockClosed color='#9ca1ab' size={22} />
                        <input type="password" placeholder='Repite tu contraseña' />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CreateAccount;