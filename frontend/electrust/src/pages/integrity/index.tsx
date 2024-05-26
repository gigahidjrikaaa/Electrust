import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const IntegrityPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center text-center p-5">
                <div className="mt-20 mb-4 w-full flex flex-col items-center">
                    <h1 className="font-bold font-russo-one text-6xl text-mikadoYellow mb-10 mt-10">Integrity Check</h1>
                    <div className="w-56 h-56 border-white border-2 mb-4 rounded-full overflow-hidden"> <Image src="/cardano.png" alt="Cardano Logo" width={224} height={224} className="object-cover" style={{ width: '100%', height: '100%' }} /> </div>
                </div>
                
                <article className="font-sans text-lg text-white text-justify max-w-2xl mt-6 px-4 mb-10">
                <p>
                    Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to create possibility for the many, as well as the few, and bring about positive global change.
                </p>
                    <p className='mt-4'>
                        Built on peer-reviewed research and developed through evidence-based methods, Cardano combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.
                    </p>
                    <p className="mt-4">
                        Cardano aims to redistribute power from unaccountable structures to the margins – to individuals – and be an enabling force for positive change and progress.
                    </p>
                </article>
            </div>
            <Footer />
        </div>
    );
};

export default IntegrityPage;
