import '../styles/main.css'
import Header from '../components/Header'

export default function Main(){
    return(
        <div>
            <Header/>
            <div className='mainBl'>
                <div className='mainSavedSp'>Сохраненное</div>
            </div>
        </div>
    )
}