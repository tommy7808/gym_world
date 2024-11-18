import { Navbar, Modal, Heading, Paragraph, Button, ButtonSize, SlideUp, Section } from '../components';
import { HeadingSize, ParagraphSize } from '../utils';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import { useState } from 'react';

export function Hero() {
    const [isModalOpen, setisModalOpen] = useState(true);
    return (
        <Section additionalStyles='hero-img' isFullScreen={true}>
            <div className='w-full h-full flex flex-col'>
                <Modal isOpen={isModalOpen} setIsOpen={setisModalOpen} />
                <Navbar />
                <div className='flex flex-col flex-1 gap-[3.75rem] justify-center items-center self-center'>
                    <SlideUp delay={0.8} animationState={!isModalOpen}>
                        <Heading size={HeadingSize.h1} additionalStyles='text-center'>
                            Come & Build Your <span className='text-primary-300'>Dream Body</span>
                            <br /> With Gym World
                        </Heading>
                    </SlideUp>
                    <SlideUp delay={1.3} animationState={!isModalOpen}>
                        <Paragraph size={ParagraphSize.p1} additionalStyles='text-center'>
                            With the help of our professional trainers and guided programs, we will build the body you
                            have always dreamed of.
                        </Paragraph>
                    </SlideUp>
                    <SlideUp delay={1.8} animationState={!isModalOpen}>
                        <Button text='Get Started' hasOutline={false} size={ButtonSize.LARGE} icon={rightArrowIcon} />
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
}
