import React from 'react';
import useAuth from '../hooks/useAuth';
import { remove } from 'react-cookies'
function Navigationbar() {
	const { auth, setAuth }	= useAuth();
	function handleLogout(){
		remove('name', { path: '/' });
		remove('id', { path: '/' });
		remove('password', { path: '/' });
		remove('isLoggedIn', { path: '/' });
		setAuth({name:'',id:'',password:'',isLoggedIn:false});
	}
	return (
		<nav className="bg-gray-800 text-white">
			<div className="mx-auto px-5 md:px-40 py-2 flex justify-between items-center">
				<div className="text-white text-3xl">
					Fship
				</div>
				{auth.isLoggedIn &&
				<div >
					<span className="hidden sm:inline">Signed In as <span className='font-bold'>{auth.name} </span> </span>
					<button onClick={handleLogout} className='ml-4 bg-red-400 px-2 py-1 rounded hover:bg-red-500'>
						Sign Out
					</button>
				</div>}
			</div>

		</nav>
	)
}

export default Navigationbar