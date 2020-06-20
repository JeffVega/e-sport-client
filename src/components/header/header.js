import React from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
    return(
        <div className="header">
            <header>
                <div className="logo">
                    <img src="https://via.placeholder.com/150" alt='placeholder image'/>
                </div>
                <ul>
                    <li>
                       <Link>News </Link>  
                    </li>
                    <li>
                      <Link>Update </Link>  
                    </li>
                    <li>
                        <Link>Teams</Link>
                    </li>
                    <li>
                      <Link>Tournaments </Link>  
                    
                    </li>
                    <li>
                        <Link>Community</Link>
                        </li>    
                        <li>
                        <Link to='tv'>TV ESPORTS</Link>
                    </li>               
                </ul>
            </header>
            
        </div>
    )
}
export default Header;