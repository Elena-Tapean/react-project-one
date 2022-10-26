import './css/sign-up.scss';

function handleSubmit () {
    alert("Hello!")
}

export const Register = function () {
    return (
        <main>
            <div className='sign-up'>
                <form cy='register-form'>
                    <label htmlFor='firstName'>First name:</label>
                    <br/>
                    <input type="text" id="firstName" placeholder="Enter first name" />
                    <br/>
                    <label htmlFor='lastName'>Last name:</label>
                    <br/>
                    <input type="text" id="lastName" placeholder="Enter last name" />
                    <br/>
                    <label htmlFor='email'>Email:</label>
                    <br/>
                    <input type="text" id="email" placeholder="Enter email" />
                    <br/>
                    <label htmlFor='password'>Password:</label>
                    <br/>
                    <input type="text" id="password" placeholder="Enter password" />
                    <br/>
                    <label htmlFor='role'>Role:</label>
                    <br/>
                    <select id="role">
                        <option value="visitor">Visitor</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="colaborator">Colaborator</option>
                    </select>
                    <br/>
                    <br/>
                    <button cy="submit-button" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </main>
    )
}