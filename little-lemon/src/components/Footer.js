import React from "react";
import logo from "../images/Logo.jpg";

function Footer()
{
    return(
        <footer className="footer">
            <img src={logo} alt="logo" />
          <p>&copy; 2026 Little Lemon / All right reserved</p>
        </footer>
    )
}

export default Footer;
