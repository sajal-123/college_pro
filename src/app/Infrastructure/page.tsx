import Carousel from '@/components/Crousal';
import Image from 'next/image';

const Section = ({ title, images, quote, author }: { title: string, images: string[], quote: string, author: string }) => (
    <div className="w-full px-6 flex flex-col items-center">
        {/* Section Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 flex items-center">
            <span className="px-4">{title}</span>
        </h1>
        {/* Images */}
        <div className={`grid ${images.length > 1? 'grid-cols-1 w-full md:grid-cols-2 gap-4' : ' grid-cols-1 w-full'}`}>
            {images.map((src: string, index: number) => (
                <div
                    key={index}
                    className="w-[100%] h-[600px] relative shadow-lg rounded-lg overflow-hidden mb-6">
                    <h1>src</h1>
                    <Image
                        src={src}
                        alt={title}
                        layout="fill" // Makes the image fill its parent container
                        objectFit="cover" // Ensures the image scales nicely and maintains aspect ratio
                    />
                </div>
            ))}
        </div>

        {/* Quote Section */}
        <div className="text-center px-6">
            <p className="text-lg italic text-gray-700 mb-2">{quote}</p>
            <p className="text-base font-semibold text-gray-800">– {author}</p>
        </div>
    </div>
);

function Infrastructure() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            {/* Reception Section */}
            <Section
                title="SCHOOL RECEPTION AREA"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                ]}
                quote="All children start their school careers with sparkling imaginations, fertile minds, and a willingness to take risks with what they think."
                author="Ken Robinson"
            />

            {/* Mathematics Laboratory Section */}
            <Section
                title="MATHEMATICS LABORATORY"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                ]}
                quote="Mathematics is the music of reason."
                author="James Joseph Sylvester"
            />

            {/* Science Lab Section */}

            <div className="w-full px-6 flex flex-col items-center">
                {/* Section Header */}
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 flex items-center">
                    <span className="px-4 m-4 ">Science labs pics</span>
                </h1>
                {/* Images */}
                <div className={'grid lg:grid-cols-3 md:grid-cols-2 w-full grid-cols-1 gap-4'}>
                    <div className="w-[100%] h-[600px] relative  rounded-lg overflow-hidden mb-6">
                        <h1 className='text-blue-700 text-2xl text-center mb-4 font-bold'>Physics Lab</h1>
                        <div
                            className="w-[100%] h-[600px] relative shadow-lg rounded-lg overflow-hidden mb-6">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM.jpeg/:/cr=t:0%25,l:0%25,w:65.71%25,h:65.71%25/rs=w:1023,cg:true,m"
                                alt="physics"
                                layout="fill" // Makes the image fill its parent container
                                objectFit="cover" // Ensures the image scales nicely and maintains aspect ratio
                            />
                        </div>
                    </div>
                    <div className="w-[100%] h-[600px] relative  rounded-lg overflow-hidden mb-6">
                        <h1 className='text-blue-700 text-2xl text-center mb-4 font-bold'>Chemistry Lab</h1>
                        <div
                            className="w-[100%] h-[600px] relative shadow-lg rounded-lg overflow-hidden mb-6">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.36%20PM.jpeg/:/rs=w:1023,cg:true,m"
                                alt="physics"
                                layout="fill" // Makes the image fill its parent container
                                objectFit="cover" // Ensures the image scales nicely and maintains aspect ratio
                            />
                        </div>
                    </div>
                    <div className="w-[100%] h-[600px] relative  rounded-lg overflow-hidden mb-6">
                        <h1 className='text-blue-700 text-2xl text-center mb-4 font-bold'>Biology Lab</h1>
                        <div
                            className="w-[100%] h-[600px] relative shadow-lg rounded-lg overflow-hidden mb-6">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.23.35%20PM%20(5).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1023,cg:true"
                                alt="physics"
                                layout="fill" // Makes the image fill its parent container
                                objectFit="cover" // Ensures the image scales nicely and maintains aspect ratio
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Computer Labs */}

            <div className="w-full px-6 flex flex-col items-center mb-8">
                {/* Section Header */}
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 flex items-center">
                    <span className="px-4 m-4 ">Computer Lab</span>
                </h1>
                {/* Images */}
                <div className='w-[80%] rounded-2xl overflow-hidden shadow-xl'>
                    <Carousel />
                </div>

            </div>


            {/* PlayZone */}

            <Section
                title="PlayZone"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',

                ]}
                quote="All children start their school careers with sparkling imaginations, fertile minds, and a willingness to take risks with what they think."
                author="Ken Robinson"
            />

            {/* Music */}

            <Section
                title="Music"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-19%20at%201.00.31%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true',
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2020.13.18_19565a3d.jpg/:/cr=t:0%25,l:8.06%25,w:83.89%25,h:83.89%25/rs=w:600,cg:true,m',

                ]}
                quote="All children start their school careers with sparkling imaginations, fertile minds, and a willingness to take risks with what they think."
                author="Ken Robinson"
            />

            {/* PlayGround */}

            <div className="w-full px-6 flex flex-col items-center mb-8">
                {/* Section Header */}
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 flex items-center">
                    <span className="px-4 m-4 ">Playground</span>
                </h1>
                {/* Images */}
                <div className='w-[80%] rounded-2xl overflow-hidden shadow-xl'>
                    <Carousel />
                </div>

                <div className="text-center px-6">
                    <p className="text-lg italic text-gray-700 mb-2">The school provides ample opportunities for students to participate in various games and sports</p>
                    <p className="text-base font-semibold text-gray-800">– Ken Robinson</p>
                </div>
            </div>
              
              {/* Library */}
            <div className="w-full px-6 flex flex-col items-center mb-8">
                {/* Section Header */}
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 flex items-center">
                    <span className="px-4 m-4 ">Library</span>
                </h1>
                {/* Images */}
                <div className='w-[80%] rounded-2xl overflow-hidden shadow-xl'>
                    <Carousel />
                </div>

                <div className="text-center px-6">
                    <p className="text-lg italic text-gray-700 mb-2">The school provides ample opportunities for students to participate in various games and sports</p>
                    <p className="text-base font-semibold text-gray-800">– Ken Robinson</p>
                </div>
            </div>

             
             {/* ClassRooms */}

             <Section
                title="ClassRooms"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0.92%25,w:98.16%25,h:98.16%25/rs=w:600,cg:true,m',
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-04-29%20at%2015.43.36.jpeg/:/cr=t:0%25,l:7.81%25,w:84.38%25,h:84.38%25/rs=w:600,cg:true,m',

                ]}
                quote="All children start their school careers with sparkling imaginations, fertile minds, and a willingness to take risks with what they think."
                author="Ken Robinson"
            />

        </div>
    );
}

export default Infrastructure;
