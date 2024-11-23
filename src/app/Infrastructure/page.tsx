import Image from 'next/image';

const Section = ({ title, images, quote, author }: { title: string, images: string[], quote: string, author: string }) => (
    <div className="w-full px-6 flex flex-col items-center">
        {/* Section Header */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">{title}</h1>

        {/* Images */}
        <div className={`grid ${images.length > 1 ? 'grid-cols-1 md:grid-cols-2 gap-4' : ''}`}>
            {images.map((src: string, index: number) => (
                <div
                    key={index}
                    className="w-[80%] h-[600px] relative shadow-lg rounded-lg overflow-hidden mb-6"
                >
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
            {/* <Section
                title="MATHEMATICS LABORATORY"
                images={[
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                    'https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2011.19.06%20AM.jpeg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true',
                ]}
                quote="Mathematics is the music of reason."
                author="James Joseph Sylvester"
            /> */}
        </div>
    );
}

export default Infrastructure;
