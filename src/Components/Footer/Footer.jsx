
import React from "react";
import { Link } from "react-router-dom";
import '../../styled-components/footer/Footer.css'
function Footer(){
  return(
  <>
<div className='footer-container'>
  <section className='footer-Intro'>
    <p className='footer-Intro-heading'>
     (exemple) Pour une transition dans votre entreprise ou l'intégration de l'amélioration continue 
      </p>
      <p className='footer-Intro-heading'>
      ...échangeons de vive voix ! 
      </p>
     
</section>


<div className='footer-links'>
  <div className='footer-link-wrapper'>
    <div className='footer-link-items'>
<h2>Plan du site</h2>
<Link to='/Explorez'>Explorez </Link>
            <Link to='/'>C'est l'histoire de...</Link>
            <Link to='/'>Les dirigeants</Link>
            <Link to='/'>Les 4 leviers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacts</h2>
            <Link to='/'>06/00/00/00/00</Link>
            <Link to='/'>Par email</Link>
            <Link to='/'>Siège sociale baser à Orleans</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Evénnement</h2>
            <Link to='/'>Le Week-End des conférences</Link>
            <Link to='/'>Une autre conférences</Link>
            <Link to='/'>Une autre conférence</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
</div>
</>

)
}
export default Footer
