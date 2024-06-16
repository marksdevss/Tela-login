import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from 'react';

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);



    const handleSubmit = (event) => {

        event.preventDefault();

        if (username === 'usuario' && password === 'senha') {
            alert('Login bem-sucedido!');
        } else {
            setShowPopup(true); 
        }

    };

    const closePopup = () => {
        setShowPopup(false);
    }





    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Acesse o sistema</h1>
                    <div className='input-field'>
                        <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-field'>
                        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>

                    <div className="recall-forget">
                        <label >
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="/">Esqueceu a senha?</a>
                    </div>
                    <button className='alerta' onClick={notify}>Entrar</button>
                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="/">Registrar</a> </p>
                    </div>

                </form>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <span className="closebtn" onClick={closePopup}>&times;</span>
                        <h2>Erro de Login</h2>
                        <p>Usuário ou senha incorretos. Por favor, tente novamente.</p>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Login
