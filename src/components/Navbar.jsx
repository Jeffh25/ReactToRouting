import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id='navbar'>
       <ul className="nav nav-pills mb-3" id="navbarUl" role="tablist">
           {/* <!--tips: to fill or justify the .nav-pills space use .nav-fill or .nav-justified--> */}
           <li className="nav-item" id='navbarLinks'>
                <Link className='theOne' to={`/`}>Home</Link>
           </li>
           <li className="nav-item" id='navbarLinks'>
               <Link className='theOne' to={`/films`}>Films</Link>
           </li>
           <li className="nav-item" id='navbarLinks'>
               <Link className='theOne' to={`/people`}>Characters</Link>
           </li>
       </ul>
       <div className="tab-content" id="pills-tabContent">
           {/* <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
               Home Content
           </div>
           <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
               Profile Content
           </div> */}
       </div>
        </div>
    )
}

export default Navbar;