import './css/error-page.scss';

export const PageNotFound = function () {
    return (
        <div className='error-page'>
            <h1>Page Not Found</h1>
            <h2>404</h2>
            <p>Did you know...?<br/><br/>
            That the 404 error dates all the way back to the 1980s?
            <br/><br/>
            Check this website and find out: <a href="https://www.news.com.au/technology/online/social/the-404-not-found-error-page-has-origins-dating-back-to-the-1980s/news-story/c30a3488e240067204fbcc0155dcbabe">The Story of the 404 Error Message</a>
            </p>
        </div>
    )
}
