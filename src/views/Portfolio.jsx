import './css/port-folio.scss';
import './css/background-portfolio.scss';

export const Portfolio = function () {
    return (
        <main className="background-portfolio">
            <div className="port-folio">
                <h1>My projects so far</h1>
                <h2>1. Project One</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/297272427_8061666247206686_5854492312499706271_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEKtT2g1FK6xrLWWxn__So4vh0sdALzl-u-HSx0AvOX63MUoUN1-S_zE0RQZckU0QBb-cl2IHJsBLgKPdYcnKmz&_nc_ohc=3S5Ozw2nK2oAX-rEgTm&tn=zBda7qO6N6VquDzN&_nc_ht=scontent.fotp7-2.fna&oh=00_AT_xrojeDaIQCGLOOlmVs-xNmmkpTqDmgx8i4ywekreN9g&oe=62ECF988" alt="React Resume" className="image" />
                    </figure>
                    <div className="overlay">
                        <div className="text"><a href="http://localhost:3000/resume/elena/">React Resume</a></div>
                    </div>
                </div>
                <h2>2. Project Two</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296303611_8059018590804785_7478927585763227444_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHLxu9junQYpdBsag9EuSVq73RPSAqsX3HvdE9ICqxfcS-KhD3ECN37wLZkwL72HnHr7zzs_uqi0p8othsICZ5r&_nc_ohc=43i8l9N0oKcAX-K5QwV&tn=zBda7qO6N6VquDzN&_nc_ht=scontent-otp1-1.xx&oh=00_AT-E39-4pqbuQ3bKcdq0Y3yw3PWl6DbBsCxw5o_zqAZ8uQ&oe=62EC2442" alt="Vue Website" className="image" />
                    </figure>
                    <div className="overlay">
                        <div className="text"><a href="#">Vue Website</a></div>
                    </div>
                </div>
                <h2>3. Personal Projects #1</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/297160933_8058832867490024_6575266018145341092_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZ2tGlRK6cFbnL24-UZhXfQSLyfoBKF0NBIvJ-gEoXQ6J28X_1zLiuVCkg_WhewjOZ_o4HKTlPoCgaOao0a3uv&_nc_ohc=Zyy16V_LCccAX9yl7xR&_nc_oc=AQksLC6Cz1ajGPsd_qASo2wsMwmxiU2ea_PLm7XFhR0IOkO4YDblQxQUTvELWDWHx0E&tn=zBda7qO6N6VquDzN&_nc_ht=scontent-otp1-1.xx&oh=00_AT89_GR9wKx6KofeI5riqOFBSWRHwnOxN11se1TVqRVfuA&oe=62ED1977" alt="Poetry Blog" className="image" />
                    </figure>
                    <div className="overlay">
                        <div className="text"><a href="https://elenatapeanpoetry.wordpress.com/">My Poetry Blog</a></div>
                    </div>
                </div>
                <h2>3. Personal Projects #2</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296364111_8058836417489669_3469951829364631981_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFnmn5Mq2PajpqNexQ4sBN7a_XIxX0Fw6xr9cjFfQXDrK-3Kk1EqapA2wZD28QiCji-kI87kkOm9Bq4qjojaPzG&_nc_ohc=fmQPk5pjsR4AX9_R8Tm&_nc_ht=scontent-otp1-1.xx&oh=00_AT-A8hM-fSk_o2_L8hesHmhc5jM_dyHdpgVsqIAiqxBDYQ&oe=62ED9143" alt="Photography Blog" className="image" />
                    </figure>
                    <div className="overlay">
                        <div className="text"><a href="https://elenatapeanphotos.wordpress.com/">My Photography Blog</a></div>
                    </div>
                </div>
                <h2>3. Personal Projects #3</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296391965_8059024344137543_121256030906353369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGdSnkvdRA_aAWfr9YrxRQJMNw-DLCuM34w3D4MsK4zfjP-dE-GLc6eav1gEDThaP9u_Jw65cGfWsN5cSxVkKEp&_nc_ohc=-DLMSgbLxn8AX85aB16&_nc_ht=scontent-otp1-1.xx&oh=00_AT8VHVZ1efecAbG5Kaw_gSZ7mDbLLmNvySBVxwO2JlmMfw&oe=62ED97CC" alt="A Simple Game" className="image" />
                    </figure>
                    <div className="overlay">
                        <div className="text"><a href="#">A Simple Game</a></div>
                    </div>
                </div>
            </div>
        </main>   
    )
}
