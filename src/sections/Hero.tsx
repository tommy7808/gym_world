import { Navbar, Modal, Heading, Paragraph, Button, ButtonSize } from '../components';
import { HeadingSize, ParagraphSize, sectionPadding } from '../utils';
import rightArrowIcon from '../assets/icons/right-arrow.svg';

export function Hero() {
    return (
        <section className={`w-full h-full flex flex-col hero-img py-9 ${sectionPadding}`}>
            <Modal />
            <Navbar />
            <div className='flex flex-col flex-1 gap-[3.75rem] justify-center items-center self-center'>
                <Heading size={HeadingSize.h1} additionalStyles='text-center'>
                    Come & Build Your <span className='text-primary-300'>Dream Body</span>
                    <br /> With Gym World
                </Heading>
                <Paragraph size={ParagraphSize.p1} additionalStyles='text-center'>
                    With the help of our professional trainers and guided programs, we will build the body you have
                    always dreamed of.
                </Paragraph>
                <Button text='Get Started' hasOutline={false} size={ButtonSize.LARGE} icon={rightArrowIcon} />
            </div>
        </section>
    );
}
