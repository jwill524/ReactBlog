import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sideBarItem">
                <span className='sidebarTitle'>About Me</span>
                <img src="/images/mountain.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium quo perspiciatis, vitae officia excepturi cumque ipsa quidem magni suscipit aut enim sequi dolorum consectetur facere aliquam amet dolorem nam.</p>

            </div>
            <div className="sideBarItem">
            <span className='sidebarTitle'>Categories</span>
            <ul className="sideBarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
            </ul>
            </div>
            <div className="sideBarItem">
            <span className='sidebarTitle'>Follow Us</span>    
            <div className="sideBarSocial">
            <i className="sideIcon fab fa-instagram-square"></i>
            <i className="sideIcon fab fa-facebook-square"></i>
            <i className="sideIcon fab fa-twitter-square"></i>
            <i className="sideIcon fab fa-pinterest-square"></i>
            </div>
            </div>
        </div>
    )
}
