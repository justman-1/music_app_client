import '../styles/signin.css'
import housePng from '../imgs/house.png'

export default function Signin(){
    return(
        <div>
            <a href="/"><img src={housePng} className='signinHousePng' /></a>
            <div className='signinBl'>
                <div className="signinSp">Вход</div>
                <input type="email" className="signinInp" placeholder="email"/>
                <input type="password" className="signinInp" placeholder="password"/>
                <input type="password" className="signinInp" placeholder="password again"/>
                <a href="/signup"><div className='signinSwitch'>Еще не зарегистрированы?</div></a>
                <div className="signinBlBut">Войти</div>
                <div className='signinError'></div>
            </div>
        </div>
    )
}