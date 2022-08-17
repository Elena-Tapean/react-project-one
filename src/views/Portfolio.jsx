import './css/port-folio.scss';
import './css/backgrounds/background-portfolio.scss';

export const Portfolio = function () {
    return (
        <main className="background-portfolio">
            <div className="port-folio">
                <h1>My projects so far</h1>
                <h2>1. Project One</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/297272427_8061666247206686_5854492312499706271_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEKtT2g1FK6xrLWWxn__So4vh0sdALzl-u-HSx0AvOX63MUoUN1-S_zE0RQZckU0QBb-cl2IHJsBLgKPdYcnKmz&_nc_ohc=08h2ZdxtbNUAX9a9Ck_&tn=zBda7qO6N6VquDzN&_nc_ht=scontent-otp1-1.xx&oh=00_AT9-hm6QyS6kxFlGuxWe2V73hQwdWQM4Y8wBk8N-AROGjg&oe=6300C008" alt="React Resume" className="image" />
                    </figure>
                    <div className="overlay">
                        <a className="text" href="http://localhost:3000/resume/elena/">React Resume</a>
                    </div>
                </div>
                <h2>2. Project Two</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296303611_8059018590804785_7478927585763227444_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHLxu9junQYpdBsag9EuSVq73RPSAqsX3HvdE9ICqxfcS-KhD3ECN37wLZkwL72HnHr7zzs_uqi0p8othsICZ5r&_nc_ohc=z1NEaFIM2nkAX9VyNwO&tn=zBda7qO6N6VquDzN&_nc_ht=scontent-otp1-1.xx&oh=00_AT9BREppnXycBjij4w2XamWfXPxh6grWCaXsYPqjorZ-eQ&oe=6301E502" alt="Vue Website" className="image" />
                    </figure>
                    <div className="overlay">
                        <a className="text" href="#">Vue Website</a>
                    </div>
                </div>
                <h2>3. Personal Projects #1</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/297160933_8058832867490024_6575266018145341092_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZ2tGlRK6cFbnL24-UZhXfQSLyfoBKF0NBIvJ-gEoXQ6J28X_1zLiuVCkg_WhewjOZ_o4HKTlPoCgaOao0a3uv&_nc_ohc=Qu_hZa3Hp3MAX_i_UfE&_nc_oc=AQlA6LaOlPByZrdGsITzaf_6XsAZklVc55cizIi3zEuGQ_FQEDtNeiBP803PvaEdTNc&tn=zBda7qO6N6VquDzN&_nc_ht=scontent-otp1-1.xx&oh=00_AT_mIagi89zjRJzfXYmw4GyGUxRYhFynoT_SE0JoB9SClg&oe=6300DFF7" alt="Poetry Blog" className="image" />
                    </figure>
                    <div className="overlay">
                        <a className="text" href="https://elenatapeanpoetry.wordpress.com/">My Poetry Blog</a>
                    </div>
                </div>
                <h2>3. Personal Projects #2</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296364111_8058836417489669_3469951829364631981_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFnmn5Mq2PajpqNexQ4sBN7a_XIxX0Fw6xr9cjFfQXDrK-3Kk1EqapA2wZD28QiCji-kI87kkOm9Bq4qjojaPzG&_nc_ohc=5MuPE9_AulgAX_AD7sq&_nc_ht=scontent-otp1-1.xx&oh=00_AT8UBlxmLyI7ZFOSFBE2p9lnSfSxaXruj4SMCKX3QLKx7A&oe=630157C3" alt="Photography Blog" className="image" />
                    </figure>
                    <div className="overlay">
                        <a className="text" href="https://elenatapeanphotos.wordpress.com/">My Photography Blog</a>
                    </div>
                </div>
                <h2>3. Personal Projects #3</h2>
                <div className="container">
                    <figure>
                        <img src="https://scontent-otp1-1.xx.fbcdn.net/v/t39.30808-6/296391965_8059024344137543_121256030906353369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGdSnkvdRA_aAWfr9YrxRQJMNw-DLCuM34w3D4MsK4zfjP-dE-GLc6eav1gEDThaP9u_Jw65cGfWsN5cSxVkKEp&_nc_ohc=PPQkxa1IoV0AX_ezqF1&_nc_ht=scontent-otp1-1.xx&oh=00_AT_ROL28V2R3DMlL65QzX3qBJPtlYLOBTyKeTljQAkf18Q&oe=63015E4C" alt="A Simple Game" className="image" />
                    </figure>
                    <div className="overlay">
                        <a className="text" href="#">A Simple Game</a>
                    </div>
                </div>
            </div>
        </main>   
    )
}
