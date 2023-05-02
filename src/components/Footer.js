import React from 'react'
import {Link} from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email"

import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
            <a href="https://www.linkedin.com/in/hamza-ioudeh-04a9a1201/"><LinkedInIcon /></a>
                    <a href="mailto:hamzaalmidany@gmail.com"><EmailIcon /></a>
                    <a href="https://github.com/hamzaoda"><GithubIcon /></a>
            </div>
            <p> &copy; 2023 Hamza Ioudeh </p>
        </div>
    )
}

export default Footer
