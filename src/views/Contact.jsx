import './css/contact-page.scss';

function handleSubmit (ev) {
    ev.preventDefault()
}

export const Contact = function () {
    return (
        <main className="contact-page">
            <h1>Let's get in touch!</h1>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <label htmlFor="name">Your Name:<br/><br/>
                        <input type="text" id="name" placeholder="John Doe"></input>
                    </label>
                    <br/>
                    <label htmlFor="email">Your Email:<br/><br/>
                        <input type="text" id="email" placeholder="johndoe@mail.com"></input>
                    </label>
                    <br/> 
                    <label htmlFor="message">Your Message:<br/><br/>
                    <textarea rows="5" cols="50" id="textarea" placeholder="I would like to collaborate with you on some of my projects..."></textarea>
                    </label>
                    <br/>
                    <button>Send</button>
                </form>
        </main>
    )
}
