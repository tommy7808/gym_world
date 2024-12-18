import { Navbar, Modal, Heading, Paragraph, Button, ButtonSize, SlideUp, Section } from '../components';
import { HeadingSize, ParagraphSize } from '../utils';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import { GenericModalProps } from '../components/types';

export function Hero({ isModalOpen, setIsModalOpen }: GenericModalProps) {
    return (
        <Section id='hero' additionalStyles='hero-img' isFullScreen={true}>
            <div className='w-full h-full flex flex-col'>
                <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
                <Navbar />
                <div className='flex flex-col flex-1 gap-[3.75rem] justify-center items-center self-center'>
                    <SlideUp duration={1} delay={0.8} animationState={!isModalOpen}>
                        <Heading size={HeadingSize.h1} additionalStyles='text-center'>
                            Come & Build Your <span className='text-primary-300'>Dream Body</span>
                            <br /> With Gym World
                        </Heading>
                    </SlideUp>
                    <SlideUp duration={1} delay={1.3} animationState={!isModalOpen}>
                        <Paragraph size={ParagraphSize.p1} additionalStyles='text-center'>
                            With the help of our professional trainers and guided programs, we will build the body you
                            have always dreamed of.
                        </Paragraph>
                    </SlideUp>
                    <SlideUp duration={1} delay={1.8} animationState={!isModalOpen}>
                        <a href='#memberships'>
                            <Button
                                text='Get Started'
                                hasOutline={false}
                                size={ButtonSize.LARGE}
                                icon={rightArrowIcon}
                            />
                        </a>
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
}
