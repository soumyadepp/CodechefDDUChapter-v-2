import './Footer.scss'
import logo from '../../Images/img1.png';
function Footer() {
    return (
        <div className = "footer-main">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-content-center">
                    <h1 className='footer-content-text'>About Us</h1>
                     <h1 className='footer-content-text'>Contact</h1>
                     <h1 className='footer-content-text'>Terms & Conditions</h1>
                    <h1 className='footer-content-text'>Privacy Policy</h1>
                </div>
                <div className="footer-content-right">
                     <h1 className='footer-content-text'>Follow Us</h1>
                     <h1 className='footer-content-text'>Subscribe</h1>
                     <h1 className='footer-content-text'>Join Us</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
