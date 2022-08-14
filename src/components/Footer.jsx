import './css/footer-bar.scss';

function handleSubmit (event) {
    event.preventDefault();
}

export const Footer = function () {
    return (
        <div className='page-container'>
            <footer className='footer-bar'>
                <nav>
                    <form>
                        <input type="text" placeholder="Search..." id="search" />
                        <button onSubmit={handleSubmit} type="submit">Search</button>
                    </form>
                    <span>© Copyright 2022</span>
                    <span className='span-larger'>© Copyright 2022 Elena Țăpean. All Rights Reserved.</span>
                </nav>
            </footer>
        </div>
    )
}