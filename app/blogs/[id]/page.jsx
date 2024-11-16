'use client'
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect,useState } from 'react'
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';


const page = ({params}) => {

    const[data,setData] = useState(null);

    const fetchBlogData = () =>{
        for(let i=0;i<blog_data.length;i++){
            if (Number(params.id)===blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
                
            }
        }
    }

    useEffect(()=>{
        fetchBlogData();
    },[]);
    return (data?<>
    <div className='bg-gray-200 py-5 px-5 ms:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
        <Link href='/'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm-w-auto'/>
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#00000]'>Get Started
            <Image src={assets.arrow} alt=''/>
        </button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-width-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full'src={data.author_img} width={60} height={60} alt=''/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className=' border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>step 1: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <h3 className='my-5 text-[18px] font-semibold'>step 2: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <h3 className='my-5 text-[18px] font-semibold'>step 3: Self-Reflection and Goal Setting</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>

        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum consectetur earum, illum saepe maxime corrupti magnam incidunt expedita deserunt ab minima sunt a architecto atque officia laboriosam debitis, impedit aliquid inventore autem. Quis, recusandae!</p>

        <h3 className='my-5 text-[18px] font-semibold'> Conclusion:</h3>
        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem architecto non sunt, ad amet deserunt. Dicta hic a accusantium, id, optio dignissimos molestias repudiandae vel facere atque neque sint numquam cumque, rem rerum vero ipsum quisquam. Optio, ad ut!</p>
        <div className='my-24'>
            <p className='text-black font-semibold my-4'>Share this article on social media</p>
            <div className="flex">
                <Image src={assets.facebook_icon} width={50} alt=''/>
                <Image src={assets.twitter_icon} width={50} alt=''/>
                <Image src={assets.googleplus_icon} width={50} alt=''/>
            </div>
        </div>

    </div>
    <Footer/>
    </>:<></>
  )
}

export default page
