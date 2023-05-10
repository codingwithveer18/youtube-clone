import './Video.css';
import gdsclogo from './images/gdsclogo.png'
import loginlogo from './images/login.png'

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
function Video({ title1, title2, title3, title4, title5, title6, item }) {
    return (
        <>
            <div className='products'>
                <div className='items'>
                    <img src='https://m.media-amazon.com/images/I/61a1iN8Y-LL._AC_SY135_.jpg' />
                    <div className='title'>{title1}</div>
                    <div className='price'>{item}</div>
                </div>
                <div className='items'>
                    <img src='https://m.media-amazon.com/images/I/81L3BIIbF-L._AC_SY135_.jpg' />
                    <div className='title'>{title2}</div>
                    <div className='price'>{item}</div>
                </div>
                <div className='items'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg' />
                    <div className='title'>{title3}</div>
                    <div className='price'>{item}</div>
                </div>
                <div className='items'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg' />
                    <div className='title'>{title4}</div>
                    <div className='price'>{item}</div>
                </div>
                <div className='items'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg' />
                    <div className='title'>{title5}</div>
                    <div className='price'>{item}</div>
                </div>
                <div className='items'>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg' />
                    <div className='title'>{title6}</div>
                    <div className='price'>{item}</div>
                </div>
            </div>

        </>
    )
}
export { Header, Video };