import CountUp from 'react-countup';
import { Heading, Section } from '../components';
import { HeadingSize } from '../utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SocialProofItemProps {
    number: number;
    suffix: string;
    subText: string;
}
function SocialProofItem({ number, suffix, subText }: SocialProofItemProps) {
    return (
        <div className='flex flex-col gap-3'>
            <CountUp
                end={number}
                suffix={suffix}
                duration={3}
                className='text-[1.25rem] sm:text-[1.5rem] xl:text-[1.75rem] text-primary-300 font-semibold text-center'
            />
            <span className='text-[1rem] sm:text-[1.25rem] xl:text-[1.5rem] text-center'>{subText}</span>
        </div>
    );
}
export function SocialProof() {
    const divRef = useRef<HTMLDivElement>(null);
    const isDivInView = useInView(divRef, { once: true, amount: 0.5 }); // Animation triggers when 50% of the element is in view.
    return (
        <Section id='social-proof' additionalStyles='bg-neutral-black-200 !py-0 !px-0'>
            <div
                ref={divRef}
                className='flex w-full h-auto flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center mt-9 lg:mt-0 lg:ml-9'>
                <Heading size={HeadingSize.h2} additionalStyles='text-center'>
                    We raise your<br></br>
                    <span className='text-primary-300'>Confidence</span>
                </Heading>
                <div className='flex flex-row lg:flex-col gap-12 py-10'>
                    {isDivInView && <SocialProofItem number={2000} suffix='+' subText='Members' />}
                    {isDivInView && <SocialProofItem number={20} suffix='+' subText='Expert Trainers' />}
                    {isDivInView && <SocialProofItem number={10} suffix=' Years' subText='Experience' />}
                </div>
                <img
                    src='https://res.cloudinary.com/dopxg7h3m/image/upload/f_auto,q_auto,w_509,h_340,c_fill/v1755691142/gym_world/social-proof_oaifo6.png'
                    className='h-[340px] lg:h-full w-full lg:w-2/5 object-cover'
                    loading='lazy'
                    alt=''
                />
            </div>
        </Section>
    );
}
