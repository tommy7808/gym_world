import { Heading, Paragraph, Section, SlideUp } from '../components';
import { HeadingSize, ParagraphSize } from '../utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProgramItemProps {
    name: string;
    bgClass: string;
}

function ProgramItem({ name, bgClass }: ProgramItemProps) {
    return (
        <div className={`w-full h-full flex justify-center items-center ${bgClass}`}>
            <Paragraph size={ParagraphSize.p2} additionalStyles='uppercase'>
                {name}
            </Paragraph>
        </div>
    );
}

export function Programs() {
    const divRef = useRef<HTMLDivElement>(null);
    const program1Ref = useRef<HTMLDivElement>(null);
    const program2Ref = useRef<HTMLDivElement>(null);
    const program3Ref = useRef<HTMLDivElement>(null);
    const program4Ref = useRef<HTMLDivElement>(null);

    const isDivInView = useInView(divRef, { once: true, amount: 0 });
    const isProgram1RefInView = useInView(program1Ref, { once: true, amount: 0.2 });
    const isProgram2RefInView = useInView(program2Ref, { once: true, amount: 0.2 });
    const isProgram3RefInView = useInView(program3Ref, { once: true, amount: 0.2 });
    const isProgram4RefInView = useInView(program4Ref, { once: true, amount: 0.2 });

    const slideUpContainerStyle =
        'flex w-full max-w-[300px] lg:max-w-[375px] h-full min-h-[450px] lg:min-h-[380px] xl:min-h-[450px] 2xl:min-h-[34rem]';

    return (
        <Section>
            <div ref={divRef} className='flex flex-col w-full gap-12 lg:gap-20 xl:gap-[6rem]'>
                <div className='flex flex-col gap-3'>
                    <Heading size={HeadingSize.h2}>
                        Guided training at no
                        <span className='text-primary-300'> extra cost</span>
                    </Heading>
                    <Paragraph size={ParagraphSize.p1}>Maximise your growth with our programs.</Paragraph>
                </div>
                <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-8'>
                    <SlideUp
                        ref={program1Ref}
                        delay={0.5}
                        animationState={isDivInView && isProgram1RefInView}
                        styles={slideUpContainerStyle}>
                        <ProgramItem name='strength training' bgClass='strength-img' />
                    </SlideUp>
                    <SlideUp
                        ref={program2Ref}
                        delay={0.5}
                        animationState={isDivInView && isProgram2RefInView}
                        styles={slideUpContainerStyle}>
                        <ProgramItem name='boxing' bgClass='boxing-img' />
                    </SlideUp>
                    <SlideUp
                        ref={program3Ref}
                        delay={0.5}
                        animationState={isDivInView && isProgram3RefInView}
                        styles={slideUpContainerStyle}>
                        <ProgramItem name='cardio' bgClass='cardio-img' />
                    </SlideUp>
                    <SlideUp
                        ref={program4Ref}
                        delay={0.5}
                        animationState={isDivInView && isProgram4RefInView}
                        styles={slideUpContainerStyle}>
                        <ProgramItem name='yoga' bgClass='yoga-img' />
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
}
