import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
const Header=()=>{

  return(
    <div>
        <div className="navb">
    <nav>
      <PhoneEnabledIcon/>
      <a href="" className="link">+91-996094347 </a>
      |<EmailIcon/>
      <a className="link"> pccoeadmin@gmail.com</a>
      |
      <a href="www.pccoepune.org" className="link">  <strong>Pccoe Official Website</strong></a>
    </nav>
      </div>
    <div className="header">
      <div className="container bg-white text-dark text-center">
        <img
          src="https://it.pccoepune.com/assets/banner_img/pccoe-logo-new.png"
          height="100px"
          className="float-start"
          alt=""
        />
        <img
          src="	https://it.pccoepune.com/assets/banner_img/pcet-trust-logo-new.png" 
          height="100px"
          className="float-end"
          alt=""
        />
        <h5 className="trust" style={{ textAlign: "centre" }}>
        <strong>PIMPRI CHINCHWAD EDUCATION TRUST's </strong>
        </h5>
        <h3 className="trust" style={{ textAlign: "centre" }}>
          <strong>PIMPRI CHINCHWAD COLLEGE OF ENGINEERING </strong> 
        </h3>
        <h6 style={{ textAlign: "centre" }}>
          <i>
            NBA Accredited | NAAC Accredited with 'A' Grade | An Autonomous
            Institute | AICTE Approved | ISO 9001: 2015 Certified | Permanently
            Affiliated to SPPU, Pune
          </i>
        </h6>
        <h2 className="name" style={{ textAlign: "centre" }}>
          <strong>PHYSICAL EDUCATION & SPORTS DEPARTMENT</strong>
        </h2>
        <p>
          <q>
            <i>Athletes in their Elements</i>
          </q>
        </p>
      </div>
    </div>
      <h2 className="admin"></h2>
    </div>
  )
}

export default Header;