import "./TopBar.css" 

export default function TopBar() {
    return (
        <div className='Top'>
            <div className="topLeft">
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" >Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </ul>
            </div>
            <div className="topRight">
                {/* <i className=" topImg fas fa-chess-king"></i>  */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gQPUaC9KJTGZwo38etjXc9ytsBi_cVdouw&usqp=CAU" alt="" className="topImg" />
                <i className="topSearchIcon fas fa-search"></i>
            </div> 
        </div>
    )
}
