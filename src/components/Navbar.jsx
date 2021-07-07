import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id='navbar'>
       <ul class="nav nav-pills mb-3 d-flex justify-content-end" id="navbarLinks" role="tablist">
           {/* <!--tips: to fill or justify the .nav-pills space use .nav-fill or .nav-justified--> */}
           <li class="nav-item">
               <a class="nav-link" id="navbarLinks" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home">
                <Link to={`/`}>Home</Link>
               </a>
           </li>
           <li class="nav-item">
               <a class="nav-link" id="navbarLinks" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" >
               <Link to={`/films`}>Films</Link>
               </a>
           </li>
           <li class="nav-item">
               <a class="nav-link" id="navbarLinks" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile">
               <Link to={`/people`}>Characters</Link>
               </a>
           </li>
       </ul>
       <div class="tab-content" id="pills-tabContent">
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