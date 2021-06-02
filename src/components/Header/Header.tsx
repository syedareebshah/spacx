import style from './header.module.css'
import pic from './logo.png'

const Header = () =>{
    return(
        <div className={style.main}>
        <img className={style.img} src={pic} alt='logo' />
        </div>
    )
}

export default Header