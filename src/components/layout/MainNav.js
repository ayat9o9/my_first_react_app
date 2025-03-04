import React from 'react'

import {Link} from 'react-router-dom'

function MainNav() {
    return (
       <header className="">
        <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
		    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<a className="text-white no-underline hover:text-white hover:no-underline" href="#">
					<span className="text-2xl "><i className="em em-grinning"></i> ReactJS</span>
				</a>
            </div>
			<div className="flex w-full text-lg  font-light pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
					<a className="inline-block py-2 px-4 text-white no-underline" >Active</a>
				  </li>
				  <li className="mr-3">
					<Link to="/"  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Home</Link>
				  </li>
				  <li className="mr-3">
					<Link to="/new"  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Ceate a Post</Link>
				  </li>
					<li className="mr-3">
					<Link to="/fav"  className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4">Liked</Link>
				  </li>
				</ul>
			</div>
        </div>
    </nav>
       </header>
    )
}

export default MainNav
