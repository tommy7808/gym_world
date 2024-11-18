import './index.css';
import { Hero } from './sections/Hero';
import { SocialProof } from './sections/SocialProof';

function App() {
    return (
        <main className='flex flex-col w-full h-full text-white gap-8 md:gap-10 xl:gap-[7.5rem] bg-neutral-black-300'>
            <Hero />
            <SocialProof />
        </main>
    );
}

export default App;
