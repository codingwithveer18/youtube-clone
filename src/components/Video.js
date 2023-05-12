import './Video.css';
import gdsclogo from './images/gdsclogo.png'
import loginlogo from './images/login.png'
import PlayButton from './playbutton'
function Header() {
    return (
        <>
            <div className='header'>
                <a href='home' className='home'>
                    <img src={gdsclogo} width={50} height={50} alt='home ' />
                </a>
                <div className='points'>
                    <a href='products'>PRODUCTS</a>
                    <input className='search' placeholder='Search Anything 🔍'></input>
                    <a href='trend'>TRENDING</a>
                </div>
                <a href='login' className='loginnow'>
                    <img src={loginlogo} width={50} height={50} alt='login' />
                </a>
            </div>
        </>
    )
}
function Video({ title, id, description, price }) {
    return (
        <>
            <div className='products'>
                <div className='items'>
                    <img src={`https://picsum.photos/id/${id}/367/267`} />
                    <div className='title'>{title}</div>
                    <div className='description'>
                        {description}<div>{price}</div></div>
                    <PlayButton></PlayButton>

                </div>
            </div>
        </>
    )
}
function Footer() {
    return (
        <>
            <div className='footer'>
                <a href='map to'>🏠 ADDRESS</a>
            </div>
        </>
    )
}
export { Header, Video, Footer };