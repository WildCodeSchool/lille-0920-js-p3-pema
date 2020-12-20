
import React from "react";
import { Link } from "react-router-dom";
import Button from '../Header/Button'
import '../../styled-components/footer/Footer.css'
import{FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa' 
function Footer(){
  return(
  <>
<div className='footer-container'>
  <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
      Oui oui oui !
      </p>
      <p className='footer-subscription -text'>
Et c'est le but !!!!!!! 
</p>
</section>

<div className='input-areas'>
<form>
  <input type='email' name='email' placeholder='Your email' className='footer-input' />
<Button buttonStyle='btn--outline'>subscribe</Button>
</form>
</div>

<div className='footer-links'>
  <div className='footer-link-wrapper'>
    <div className='footer-link-items'>
<h2>About us</h2>
<Link to='/Explorez'>HExplorez </Link>
            <Link to='/'>Toto</Link>
            <Link to='/'>Les dirigeants</Link>
            <Link to='/'>Les 4 leviers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactez Nous</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Email@gmail</Link>
            <Link to='/'>06........</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      
      <section className='soical-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='soical-logo'>
              Appelles</Link>
              </div>
<small className='website-rights'>Aller appelles ! </small>
<div className='soical-icons'>
<Link to='/' className='soical-icon-link facebook' target='_blank'
aria-label='Facebook'>
<i className='facebook'><FaFacebook></FaFacebook></i>
</Link>
<Link to='/' className='soical-icon-link instagram' target='_blank'
aria-label='Facebook'>
<i className='instagram'><FaInstagram></FaInstagram></i>
</Link>
<Link to='/' className='soical-icon-link twitter' target='_blank'
aria-label='Facebook'>
<i className='twitter'><FaTwitter></FaTwitter></i>
</Link>
<Link to='/' className='soical-icon-link youtube' target='_blank'
aria-label='Facebook'>
<i className='youtube'><FaYoutube></FaYoutube></i>
</Link>
</div>
</div>
</section>
</div>
</>

)
}
export default Footer
