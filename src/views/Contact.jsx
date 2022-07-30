import './css/contact-page.scss';

export const Contact = function () {
    return (
        <main className="contact-page">
            <h1>Let's get in touch!</h1>
                <form>
                    <label for="name">Your Name:<br/><br/>
                        <input type="text" name="name" id="name" placeholder="John Doe"></input>
                    </label>
                    <br/>
                    <label for="email">Your Email:<br/><br/>
                        <input type="text" name="email" id="email" placeholder="johndoe@mail.com"></input>
                    </label> 
                    <br/>
                    <label for="message">Your Message:<br/><br/>
                    <textarea name="textarea" rows="5" cols="50" id="textarea" placeholder="I would like to collaborate with you on some of my projects..."></textarea>
                    </label>
                    <br/>
                    <button onSubmit="">Send</button>
                </form>
        </main>
    )
}
