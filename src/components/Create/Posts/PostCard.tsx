// import {Link} from 'react-router-dom';
// import React, { useEffect, useState } from 'react';

// interface Post {
//   image: string;
//   _id: string;
//   title: string;
//   content: string;
//   category: string;
//   date:string;
//    author:string;

// }

// interface PostCardProps {
  
//   post:Post;
// }

// const PostCard: React.FC<PostCardProps> = ({ post}) => {
//   const [posts, setPost] = useState<Post | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const accessToken = localStorage.getItem('accessToken');

//         const response = await fetch(`http://localhost:5000/api/blog`,{
//           headers: {
//             Authorization: `Bearer ${accessToken}`,            },
//         });
//         if (response.ok) {
//           const postData = await response.json();
//           setPost(postData);
//           console.log("postData",postData);
//         } else {
//           throw new Error('Failed to fetch post data');
//         }
//       } catch (error) {
//         console.error('Error fetching post data:', error);
//       }
//     };

//     fetchPost();
//   }, [post]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className='inline-flex mb-2 mr-3'>
//         <div className=" w-64 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//         <Link to={`/categories/${post._id}`} >
//             <img className="rounded-t-lg w-full h-40" src={post.image} alt="" />
//             </Link>
//             <hr/>
//             <p className='text-center mt-2 text-sm text-gray-400'>{post.category}</p>

//           <div className="p-2">
           
//              <p className='text-center text-xl font-bold truncate'>{post.title}</p>
//               <p className='text-center text-sm text-gray-400'>{post.author}</p>
         
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center " style={{ display: "-webkit-box", WebkitLineClamp:2, overflow: "hidden", WebkitBoxOrient: "vertical" }} >{post.content}</p>
//             {/* <Link to={`/categories/${post._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </Link> */}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostCard;







// import {Link} from 'react-router-dom';
// import React, { useEffect, useState } from 'react';

// interface Post {
//   image: string;
//   _id: string;
//   title: string;
//   content: string;
//   category: string;
//   date:string;
//    author:string;

// }

// interface PostCardProps {
  
//   post:Post;
// }

// const PostCard: React.FC<PostCardProps> = ({ post}) => {
//   const [posts, setPost] = useState<Post | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const accessToken = localStorage.getItem('accessToken');

//         const response = await fetch(`http://localhost:5000/api/blog`,{
//           headers: {
//             Authorization: `Bearer ${accessToken}`,            },
//         });
//         if (response.ok) {
//           const postData = await response.json();
//           setPost(postData);
//           console.log("postData",postData);
//         } else {
//           throw new Error('Failed to fetch post data');
//         }
//       } catch (error) {
//         console.error('Error fetching post data:', error);
//       }
//     };

//     fetchPost();
//   }, [post]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }
//   const isImage = post.image.endsWith('.jpg') || post.image.endsWith('.jpeg') || post.image.endsWith('.png');
//   const isVideo = post.image.endsWith('.mp4') || post.image.endsWith('.avi') || post.image.endsWith('.mov');


//   return (
//     <>
//       <div className='inline-flex mb-2 mr-3'>
//         <div className=" w-64 h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
//         <Link to={`/categories/${post._id}`} >
//         {isImage ? (
//             <img className="rounded-t-lg w-full h-40" src={post.image} alt="" />
//           ) : isVideo ? (
//             <video controls className="rounded-t-lg w-full h-40">
//               <source src={post.image} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             <img className="rounded-t-lg w-full h-40" src={post.image} alt="" />     
             
//               )}
//             </Link>
           
//             <hr/>
//             <p className='text-center mt-2 text-sm text-gray-400'>{post.category}</p>

//           <div className="p-2">
           
//              <p className='text-center text-xl font-bold truncate'>{post.title}</p>
//               <p className='text-center text-sm text-gray-400'>{post.author}</p>
         
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center " style={{ display: "-webkit-box", WebkitLineClamp:2, overflow: "hidden", WebkitBoxOrient: "vertical" }} >{post.content}</p>
//             {/* <Link to={`/categories/${post._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </Link> */}
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostCard;



import { Link } from 'react-router-dom';
import React from 'react';

interface Post {
  image: string;
  _id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  author: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const isImage = post.image.endsWith('.jpg') || post.image.endsWith('.jpeg') || post.image.endsWith('.png')||post.image.endsWith('avif');
  const isVideo = post.image.endsWith('.mp4') || post.image.endsWith('.avi') || post.image.endsWith('.mov');

  return (
    <div className='sm:w-full sm:p-1 ss:p-2 sm:h-96 dark:bg-gray-800 ss:w-77 ss:h-80  '>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
        <Link to={`/categories/${post._id}`} className="flex-grow">
          {isImage ? (
            <img className="rounded-t-lg w-full h-40 object-cover" src={post.image} alt="" />
          ) : isVideo ? (
            <video controls className="rounded-t-lg w-full h-40 object-cover">
              <source src={post.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className="rounded-t-lg w-full object-cover h-40" src={post.image} alt="" />
          )}
        </Link>
       
        <p className='text-center mt-2 text-sm text-gray-400 '>{post.category}</p>
        <div className="p-2 flex-grow ">
          <p className='text-center text-xl font-bold truncate dark:text-white'>{post.title}</p>
          <p className='text-center text-sm text-gray-400'>{post.author}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center" style={{ display: "-webkit-box", WebkitLineClamp:2, overflow: "hidden", WebkitBoxOrient: "vertical" }}>{post.content}</p>
        </div>
      </div>
    </div>

  );
};

export default PostCard;
