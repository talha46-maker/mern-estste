// import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


// import { UseSelector } from 'react-redux';

// import React from 'react';
// import ReactDOM from 'react-dom';
// export default function ( Header){
// const{currentUser} = useSelector(stste=>state.user)
//   return (
//     <header className='bg-slate-200 shadow-md'>
//       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//         <Link to='/'>
//           <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
//             <span className='text-blue-500'>BluishWave</span>
//             <span className='text-slate-700'>Estate</span>
//           </h1>
//         </Link>
//         <form
//           onSubmit={""}
//           className='bg-slate-100 p-3 rounded-lg flex items-center'
//         >
//          <input
//             type='text'
//             placeholder='Search...'
//             className='bg-transparent focus:outline-none w-24 sm:w-64'
           
//           />
    
          
//           <button>
//             <FaSearch className='text-slate-600' />
//           </button>
//         </form>
//         <ul className='flex gap-4'>
//           <Link to='/'>
//             <li className='hidden sm:inline text-slate-700 hover:underline'>
//               Home
//             </li>
//           </Link>
//           <Link to='/about'>
//             <li className='hidden sm:inline text-slate-700 hover:underline'>
//               About
//             </li>
//           </Link>
//           <Link to='/sign-in'>

// {currentUser ?(
//   <img src ={currentUser.avatar}alt='profile'/>
// ) :(

//   <li className='text-slate-700 hover:underline'>Sign in</li>
// )}

//             <li className='hidden sm:inline text-slate-700 hover:underline'>
//               Sign in 
//             </li>
//           </Link>
//           <Link to='/sign-up'>
//           <li className='hidden sm:inline text-slate-700 hover:underline'>
//               Sign up
//             </li>
//           </Link>
//           <Link to='/profile'>
//           <li className='hidden sm:inline text-slate-700 hover:underline'>
//              Profile 
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// }


// export default Header




import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-blue-500'>BluishWave</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={e => e.preventDefault()}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
            
              <li className='text-slate-700 hover:underline'>Sign in</li>
            
          </Link>
         
          <Link to='/sign-up'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Sign up
            </li>
          </Link>

          <Link to='/profile'>
            {currentUser ? (
              <img
              
              src={currentUser.avatar} alt='profile' />
            ) : (
              <li className='text-slate-700 hover:underline'></li>
            )}
          </Link>

          {/* <Link to='/profile'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Profile
            </li>
          </Link> */}
        </ul>
      </div>
    </header>
  );
}
