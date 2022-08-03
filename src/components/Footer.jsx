import './css/footer-bar.scss';

export const Footer = function () {
    return (
        <div className='page-container'>
            <footer className='footer-bar'>
                <nav>
                    <form>
                        <input type="text" placeholder="Search this site" id="search" />
                        <button type="submit">Search</button>
                    </form>
                    <span>© 2022 Elena Țăpean. All Rights Reserved.</span>
                </nav>
            </footer>
        </div>
    )
}
