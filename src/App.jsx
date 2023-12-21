import React from 'react';
import React, {useState} from 'react';
import imageright from '../mediaimages/image-right.svg';
import passwordicon from '../mediaimages/eye-off-line.svg';
import googleicon from '../mediaimages/google-icon.svg';
import facebookicon from '../mediaimages/facebook-icon.svg';
import './App.css';

function LoginPage () {

  let [showPassword, setShowPassword] = useState(false);

  let togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let togglePasswordVisibilitysee = () => {
    setShowPassword(!showPassword);
  };

  let [emailVal, setEmailVal] = useState('');
  let [passVal, setPassVal] = useState('');

  let handleEmailChange = (event) => {
    setEmailVal(event.target.value);
  };

  let handlePasswordChange = (event) => {
    setPassVal(event.target.value);
  };

  let handleLogin = () => {
    const data = { email: emailVal, password: passVal };
    let dataList = JSON.parse(localStorage.getItem('data')) || [];
    dataList.push(data);
    localStorage.setItem('data', JSON.stringify(dataList));
  };

    return (
        <div className="login_page_container">
            <div className="login-left-container">
                <h1 className='left-heading'>Travling!</h1>
                <div className="login-fields-container">
                    <div className="login-fields-content">
                        <h2>Masuk</h2>
                        <h3>Daftar</h3>
                    </div>
                    <div className='input-fields-container'>
                        <input type='text' className='user-email' value={emailVal} onChange={handleEmailChange} placeholder='Nomor Ponsel atau Email'></input>
                        <input type={showPassword ? 'text' : 'password'}value={passVal} onChange={handlePasswordChange} className='user-pass' placeholder='Kata Sandi'></input>
                        <img src={passwordicon} className='password-icon' onClick={togglePasswordVisibility} alt="Pass Image"/>
                        <img src={passwordicon} className='password-icon' onClick={togglePasswordVisibilitysee} alt="Pass Image"/>
                        <button className='login-btn' onClick={handleLogin}>MASUK</button>
                        <p className='login-para'>Lupa kata sandi? <span className='login-span'>Klik disini</span></p>
                        <div className='content'>
                          <hr/>
                          <span className='masuk-dengan-content'>atau masuk dengan</span>
                          <hr/>
                        </div>
                        <img  src={googleicon} className='google-btn-icon-left' alt="Google Icon"/>
                        <button className='google-btn'>Google</button>
                        <img  src={facebookicon} className='facebook-btn-icon-left' alt="Facebook Icon"/>
                        <button className='facebook-btn'>Facebook</button>
                    </div>
                </div>
                <p className='left-copy-write'>	&#169; 2021 Travling. All Rights Reserved</p>
            </div>
            <div className="login-right-container">
                <img  src={imageright} className='img-right' alt="Login Image"/>
            </div>
        </div>
    )
};

export default LoginPage;



// App Component
// import React from 'react';
// function App () {
//     // const message1 = 'Hello Child';
// let message1 = "This is a Para";
//     return (
//         <div>
//             <h2>App Component</h2>
//             <p>{message1}</p>
//         </div>
//     )
// };

// export default App;