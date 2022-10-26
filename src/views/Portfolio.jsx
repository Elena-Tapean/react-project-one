import './css/port-folio.scss';

export const Portfolio = function () {
    return (
        <main>
            <div className="port-folio">
                <h1>My projects so far</h1>
                <div className='min-flex'>
                    <div>
                        <a href="http://localhost:3000/resume/elena">React.js Resume</a>
                        <a href="http://localhost:8080/">Vue.js Bookstore Website</a>
                        <a href="https://docs.google.com/document/d/1sU5-jxUbbbeO97Z6UGM0VLGGrTFz2Lfo16tVPfRdgi0/edit">Game Story and Designs</a>
                    </div>
                </div>
                <div className='flex-div'>
                    <div>
                        <a href="http://localhost:3000/resume/elena">React.js Resume</a>
                        <a href="http://localhost:8080/">Vue.js Bookstore Website</a>
                        <a href="https://docs.google.com/document/d/1sU5-jxUbbbeO97Z6UGM0VLGGrTFz2Lfo16tVPfRdgi0/edit">Game Story and Designs</a>
                    </div>
                </div>
            </div>
        </main>   
    )
}
