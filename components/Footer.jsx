import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        
    <div className='main-footer' style={{backgroundColor:'#352E1D', padding:'25px'}}>
    <div className='footer-middle'>
    <div className='notoSansJP'>
        <div className='container'>

        <div className='row'>
        {/* Column 1 */}
        <div className='col-4' style={{color:'#B7A57B', fontWeight:'bolder'}}>
            <div style={{fontSize:'20px'}}>Follow Us</div>
            <ul className='list-unstyled'>

            <a style={{color:'#B7A57B'}} href= 'https://www.instagram.com'><FontAwesomeIcon className='me-2' size='2x' icon={faInstagram} /></a>
            <a style={{color:'#B7A57B'}} href= 'https://www.facebook.com'><FontAwesomeIcon className='me-2' size='2x' icon={faFacebookSquare} /></a>
            </ul>
        </div>
        {/* Column 2 */}
        <div className='col-8' style={{color:'#B7A57B', fontWeight:'bolder', textAlign:'right'}}>
        <div style={{fontSize:'20px'}}>Contact</div>
            <ul className='list-unstyled'>
                <a style={{color:'#B7A57B'}} href='tel:+011234567890'><li>+011234567890</li></a>
                <li style={{wordWrap:'break-word'}}><a style={{color:'#B7A57B'}} href='mailto:+nakamajpresto@gmail.com'>nakamajpresto@gmail.com</a></li>
                <li>Lorem ipsum</li>
            </ul>
        </div>
        </div>
        </div>
        {/* Footer Bottom */}
        <div className='footer-bottom' style={{color:'#B7A57B', textAlign:'center', fontWeight:'lighter', fontSize:'14px'}}>
        <p className='text-xs-center'>
        &copy;{new Date().getFullYear()} Nakama Japanese Restaurant
        </p>
        </div>
    </div>
    </div>
    </div>


    )
    
}

export default Footer;
