// import React, { useState, useEffect } from 'react';
// import Admin from '../components/Create/Admin';
// import Calendercharts from '../components/Charts/Calendercharts';
// import Accordion from './Accordian';

// function Home1() {
//     const [totalUser, setTotalUsers] = useState<number>(0);
//     const [totalPost, setTotalPost] = useState<number>(0);
   

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 // const accessToken = localStorage.getItem('accessToken');
        
//                 // const res = await fetch("http://localhost:5000/api/getAnalytics", {
//                 //     method:'GET',
//                 //   headers: {
//                 //     Authorization: `Bearer ${accessToken}`,
            
//                 // },
                
//                 // });
//                 const res = await fetch("http://localhost:5000/api/getAnalytics");

//                 const response= await res.json()
//                 if (response.status === 200) {
//                     setTotalPost(response.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 // const accessToken = localStorage.getItem('accessToken');

//                 const res = await fetch("http://localhost:5000/api/getUsers");
//                 // , {
//                 //     method:'GET',
//                 //   headers: {
//                 //     Authorization: `Bearer ${accessToken}`,
            
//                 // },
                
//                 // });
//                 const response= await res.json()

//                 if (response.status === 200) {
//                     setTotalUsers(response.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user:', error);
//             }
//         };
//         fetchUser();
//     }, []);

//     return (
//         <>
//             <div className='bg-gray-200'>
//                 <div className='h-40' />
//                 <div className='flex'>
//                     <Admin />
//                     <main className='flex-grow p-3'>
//                         <div className='grid grid-cols-2 gap-4'>
//                             <div className='flex flex-col'>
//                                 <div className='gradient w-full h-32 p-4 flex items-center justify-center'>
//                                     <div className='text-4xl text-white'>
//                                         {totalUser}
//                                     </div>
//                                 </div>
//                                 <div className='gradient-light w-full h-32 p-4 flex items-center justify-center'>
//                                     <div className='text-4xl text-white'>
//                                         {totalPost}
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='flex flex-col'>
//                                 <div className='gradient-light w-full h-32 p-4 flex items-center justify-center'>
//                                     <div className='text-4xl'>
//                                         {totalPost}
//                                     </div>
//                                 </div>
//                                 <div className='w-full h-32 p-4 flex items-center justify-center'>
//                                     <div className='text-4xl'>
//                                         {totalUser}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='h-1/2 w-screen' />
//                         <div className='grid grid-cols-2 gap-4'>
//                             <div className='h-96 w-full'>
//                                 <Calendercharts/>
//                             </div>
//                             {/* <div className='h-96'>
//                                 Popular posts component 
//                                 <Accordion/> 
//                             </div> */}
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home1;

// import React, { useState, useEffect } from 'react';
// import Admin from '../components/Create/Admin';
// import Calendercharts from '../components/Charts/Calendercharts';
// import Accordian from './Accordian';
// import { IoIosPeople, IoIosChatbubbles } from 'react-icons/io';

// function Home1() {
//     const [totalUser, setTotalUsers] = useState(0);
//     const [totalPost, setTotalPost] = useState(0);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const res = await fetch("http://localhost:5000/api/blogs");
//                 if (res.ok) {
//                     const data = await res.json();
//                     setTotalPost(data.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await fetch("http://localhost:5000/api/getUsers");
//                 if (res.ok) {
//                     const data = await res.json();
//                     setTotalUsers(data.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user:', error);
//             }
//         };
//         fetchUser();
//     }, []);

//     return (
//         <>
//             <div className='bgcolor'>
//                 <div className=""></div>
//                 <div className="flex">
//                     <Admin />
//                     <main className="flex-grow p-3">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
//               <div className="mr-3">
//                 <IoIosPeople className="w-12 h-12" />
//               </div>
//               <div>
//                 <p className="text-3xl font-bold">{totalUser}</p>
//                 <p>Total User</p>
//               </div>
//             </div>
//             <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
//               <div className="mr-3">
//                 <IoIosChatbubbles className="w-12 h-12" />
//               </div>
//               <div>
//                 <p className="text-3xl font-bold">{totalPost}</p>
//                 <p>Total Post</p>
//               </div>
//             </div>
//           </div>
//           <div className=" w-full gap-4 mt-4">
//             <div className="bg-white p-10 py-10 h-96" >
//               <Calendercharts />
//             </div>
//             {/* <div className="bg-white p-6">
//               <Accordian/>
//             </div> */}
//           </div>
//         </main>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home1;

// import React, { useState, useEffect } from 'react';
// import Admin from '../components/Create/Admin';
// import Calendercharts from '../components/Charts/Calendercharts';
// import { IoIosPeople, IoIosChatbubbles } from 'react-icons/io';

// function Home1() {
//     const [totalUser, setTotalUsers] = useState(0);
//     const [totalPost, setTotalPost] = useState(0);
//     const [sidebarOpen, setSidebarOpen] = useState(true);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const res = await fetch("http://localhost:5000/api/blogs");
//                 if (res.ok) {
//                     const data = await res.json();
//                     setTotalPost(data.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     useEffect(() => {
//         const fetchUser = async () => {
//             try {
//                 const res = await fetch("http://localhost:5000/api/getUsers");
//                 if (res.ok) {
//                     const data = await res.json();
//                     setTotalUsers(data.length);
//                 }
//             } catch (error) {
//                 console.error('Error fetching user:', error);
//             }
//         };
//         fetchUser();
//     }, []);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div className="flex">
          
//             <Admin toggleSidebar={toggleSidebar}  />
           
//             <main className={`flex-grow p-3 ${sidebarOpen ? 'ml-72 w-80' : ''}`}>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
//                         <div className="mr-3">
//                             <IoIosPeople className="w-12 h-12" />
//                         </div>
//                         <div>
//                             <p className="text-3xl font-bold">{totalUser}</p>
//                             <p>Total User</p>
//                         </div>
//                     </div>
//                     <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
//                         <div className="mr-3">
//                             <IoIosChatbubbles className="w-12 h-12" />
//                         </div>
//                         <div>
//                             <p className="text-3xl font-bold">{totalPost}</p>
//                             <p>Total Post</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" w-full flex justify-center mt-4">
//                     <div className="bg-white p-10 py-15 h-96 ">
//                         <Calendercharts />
//                     </div>
                    
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default Home1;

import React, { useState, useEffect } from 'react';
import Admin from '../components/Create/Admin';
import Calendercharts from '../components/Charts/Calendercharts';
import { IoIosPeople, IoIosChatbubbles } from 'react-icons/io';
import SlideBar from './Slidebar';

function Home1() {
    const [totalUser, setTotalUsers] = useState(0);
    const [totalPost, setTotalPost] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/blogs");
                if (res.ok) {
                    const data = await res.json();
                    setTotalPost(data.length);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/getUsers");
                if (res.ok) {
                    const data = await res.json();
                    setTotalUsers(data.length);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row  dark:bg-gray-800 dark:h-screen">
            <Admin toggleSidebar={toggleSidebar} />
            
            <main className="flex-grow p-3  dark:bg-gray-800">
                <div className="grid md:grid-cols-2 gap-4  dark:bg-gray-800">
                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6  dark:bg-gray-800">
                        <div className="mr-3">
                            <IoIosPeople className="w-12 h-12" />
                        </div>
                        <div>
                            <p className="text-3xl font-bold">{totalUser}</p>
                            <p>Total User</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6">
                        <div className="mr-3">
                            <IoIosChatbubbles className="w-12 h-12" />
                        </div>
                        <div>
                            <p className="text-3xl font-bold">{totalPost}</p>
                            <p>Total Post</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <div className="bg-white p-10 py-15 h-96">
                        <Calendercharts />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home1;
