import '../styles/signin.css'
import housePng from '../imgs/house.png'

export default function Signup(){
    return(
        <div>
            <a href="/"><img src={housePng} className='signinHousePng' /></a>
            <div className='signinBl'>
                <div className="signinSp">Регистрация</div>
                <input type="email" className="signinInp" placeholder="email"/>
                <input type="password" className="signinInp" placeholder="password"/>
                <a href="/signin"><div className='signinSwitch'>Уже зарегистрированы?</div></a>
                <div className="signinBlBut">Зарегистрироваться</div>
                <div className='signinError'></div>
            </div>
        </div>
    )
}