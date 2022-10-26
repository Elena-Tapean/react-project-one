import './css/log-in.scss';

function handleSubmit (ev) {
    ev.preventDefault();
}

export const Login = function () {
    return (
        <main>
            <div className='log-in'>
                <form>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input type="text" id="email" placeholder="Enter email" />
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type="text" id="password" placeholder="Enter password" />
                    <br/>
                    <br/>
                    <button onClick={handleSubmit}>Log In</button>
                </form>
            </div>
        </main>
    )
}