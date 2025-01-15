import './navbar.css'

function NavigationBar(){
    return(
           <>
	           <nav>
					     <h1 id= "name">
					         Emily Kim
					     </h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
					               <li><a href="#/Works">Works</a></li>
					               <li><a href="#/About">About</a></li>
					          </ul>
					     </div>
					    </nav>

           </>
    )
}

export default NavigationBar