import React from 'react';

function Navigationbar() {
	let signedIn = true;
	return (
		<nav className="bg-gray-800 text-white">
			<div className="mx-auto px-5 md:px-40 py-2 flex justify-between items-center">
				<div className="text-white text-3xl">
					Fship
				</div>
				{signedIn &&
				<div >
					<span className="hidden sm:inline">Signed In as <span className='font-bold'>{"John Doe"} </span> </span>
					<button className='ml-4 bg-red-400 px-2 py-1 rounded hover:bg-red-500'>
						Sign Out
					</button>
				</div>}
			</div>

		</nav>
	)
}

export default Navigationbar