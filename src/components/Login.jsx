import './css/log-in.scss';
import './css/backgrounds/background-login.scss';

export const Login = function () {
    return (
        <main className='background-login'>
            <div className='log-in'>
                <form>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input type="text" id="email" placeholder="Enter email" />
                    <br/>
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type="text" id="password" placeholder="Enter password" />
                    <br/>
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        </main>
    )
}