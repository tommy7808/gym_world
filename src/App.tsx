import { useState } from 'react';
import { Footer } from './components';
import './index.css';
import { Hero, Memberships, Programs, SocialProof } from './sections';

function App() {
    const [isModalOpen, setisModalOpen] = useState(true);
    return (
        <main className='flex flex-col w-full h-full text-white gap-12 md:gap-10 xl:gap-[7.5rem] bg-neutral-black-300'>
            <Hero isModalOpen={isModalOpen} setIsModalOpen={setisModalOpen} />
            <SocialProof />
            <Programs />
            <Memberships setIsModalOpen={setisModalOpen} />
            <Footer />
        </main>
    );
}

export default App;
