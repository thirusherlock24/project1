import React from "react";
import Projects from './Projects.js';
import Contact from './Contact.js';
import FrontPage from './FrontPage.js';
import { Link, Route, Routes} from 'react-router-dom';
import One from './One.js';
function Navigate()
{return(
    <div>
    <div className="Navigate">
    <Link className="Navlink" to="/">Home</Link>
    <Link className="Navlink" to="/project/*">Projects</Link>
    <Link className="Navlink" to="/contact">Contact us</Link>
    </div>
    <Routes>
        <Route path="/project/*" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<FrontPage />} />
    
        <Route path="/project/1" element={<One projectId="1" />} />
        <Route path="/project/2" element={<One projectId="2" />} />
        <Route path="/project/3" element={<One projectId="3" />} />
        <Route path="/project/4" element={<One projectId="4" />} />

      
      </Routes>
    </div>
);

}
export default Navigate;