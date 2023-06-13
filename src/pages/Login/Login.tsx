import React, { useState } from 'react';
import styles from './styles.module.css';
import '../../assets/container.css';
import image from '../../assets/logo.png';

import {
    IoMailOutline, 
    IoLockClosed, 
    IoEyeOutline, 
    IoEyeOffOutline
} from "react-icons/io5";
import {Logo} from '../../components';

const Login: React.FC = () => {
    const [passwordType, setPasswordType] = useState<"text" | "password">("password");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleSetPassword = () => {
        setShowPassword(s => !s);
        setPasswordType(t => {
            if(t === "password") {
                return "text";
            }

            return "password";
        });
    }

    const loginWithGoogle = () => {
        console.log("Doing things");
    }

    return (
        <section className={"top-container"}>
            <div id="login-section" className={"container"}>
                <div className={styles.mainInfoContainer}>
                    <Logo />

                    <div>
                        <p className={styles.login}>Inciar sesion</p>
                        <p className={styles["login-method"]}>
                            ¡Bienvenido! Escoge un metodo para iniciar sesion:
                        </p>
                    </div>
                    <div onClick={loginWithGoogle} className={styles.googleLoginContainer}>
                        <img alt='google logo' src={image} />
                        <span>Acceder con Google</span>
                    </div>
                </div>

                <div className={styles.usernamePasswordLogin}>
                    <div className={styles.dividerContainer}>
                        <div className={styles.divider}></div>
                        <span className={styles.continueWithEmail}>o continua con email</span>
                        <div className={styles.divider}></div>
                    </div>

                    <div className={styles.infoCard}>
                        <span className={styles.infoCardText}>
                            ¿Tienes prisa? ¡No hay problema! Usa las siguientes credenciales
                        </span>
                        <span className={styles.infoCardText}>
                            Correo electronico: guest@gmail.com
                        </span>
                        <span className={styles.infoCardText}>
                            Contraseña: guest123
                        </span>
                    </div>

                    <form action="" className={styles.usernamePasswordLogin}>
                        <div className={styles.textInput}>
                            <IoMailOutline color='#9ca1ab' size={22} />
                            <input type="text" placeholder='Correo electronico' />
                        </div>

                        <div className={styles.textInput}>
                            <IoLockClosed color='#9ca1ab' size={22} />
                            <input type={passwordType} placeholder='Contraseña' />
                            {
                                showPassword ? (
                                    <IoEyeOffOutline 
                                        color={"#9ca1ab"} 
                                        size={22} 
                                        className={styles.pointer}
                                        onClick={toggleSetPassword}
                                    />
                                ): (
                                    <IoEyeOutline 
                                        color={"#9ca1ab"} 
                                        size={22} 
                                        className={styles.pointer}
                                        onClick={toggleSetPassword} 
                                    />
                                )
                            }
                        </div>

                        <div className={styles.loginButton}>
                            <a href="#f" className={styles.loginButtonText}>Inciar sesion</a>
                        </div>

                        <p className={styles.doNotHaveAnAccount}>
                            ¿No tienes una cuenta? <a href='#a' className={styles.register}>Registrate aqui</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login;
