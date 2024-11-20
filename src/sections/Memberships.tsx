import { Button, ButtonSize, Heading, Paragraph, Section, SlideUp } from '../components';
import { HeaderStyle, HeadingSize, ParagraphSize, ParagraphStyle } from '../utils';
import weightIcon from '../assets/icons/weight.svg';
import tickBoxFilled from '../assets/icons/tickbox-filled.png';
import tickBoxUnfilled from '../assets/icons/tickbox-unfilled.png';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface MembershipItemProps {
    name: string;
    priceText: string;
    hasGymAccess: boolean;
    hasTrainingPrograms: boolean;
}

function MembershipItem({ name, priceText, hasGymAccess, hasTrainingPrograms }: MembershipItemProps) {
    return (
        <div className='bg-neutral-black-100 w-full flex flex-col items-center py-10 px-8 gap-8 border-2 border-solid border-transparent hover:border-primary-200'>
            <img src={weightIcon} alt='weight' />
            <div className='flex flex-col gap-2'>
                <Heading size={HeadingSize.h4} additionalStyles='uppercase'>
                    {name}
                </Heading>
                <span className={`${HeaderStyle.h4} uppercase text-primary-300 text-center`}>{priceText}</span>
            </div>
            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-4'>
                        <img src={tickBoxFilled} alt='filled tick box' />
                        <span className={ParagraphStyle.p3}>Unlimited equipment.</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={hasGymAccess ? tickBoxFilled : tickBoxUnfilled} alt='filled tick box' />
                        <span className={ParagraphStyle.p3}>Unlimited gym access.</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={hasTrainingPrograms ? tickBoxFilled : tickBoxUnfilled} alt='filled tick box' />
                        <span className={ParagraphStyle.p3}>All Training Programs.</span>
                    </div>
                </div>
                <Button
                    text='Join Us'
                    hasOutline={true}
                    size={ButtonSize.SMALL}
                    additionalStyles='w-full self-center whitespace-nowrap'
                />
            </div>
        </div>
    );
}

export function Memberships() {
    const divRef = useRef<HTMLDivElement>(null);
    const membership1Ref = useRef<HTMLDivElement>(null);
    const membership2Ref = useRef<HTMLDivElement>(null);
    const membership3Ref = useRef<HTMLDivElement>(null);

    const isDivInView = useInView(divRef, { once: true, amount: 0 });
    const isMembership1RefInView = useInView(membership1Ref, { once: true, amount: 0.2 });
    const isMembership2RefInView = useInView(membership2Ref, { once: true, amount: 0.2 });
    const isMembership3RefInView = useInView(membership3Ref, { once: true, amount: 0.2 });

    const slideUpContainerStyle = 'flex w-full max-w-[300px] lg:max-w-[375px]';

    return (
        <Section additionalStyles='bg-neutral-black-200'>
            <div ref={divRef} className='flex flex-col w-full gap-12 lg:gap-20 xl:gap-[6rem] items-stretch'>
                <div className='flex flex-col gap-3'>
                    <Heading size={HeadingSize.h2}>Membership Plans</Heading>
                    <Paragraph size={ParagraphSize.p1}>
                        Take the first step to building your dream body by becoming a member of Gym World now.
                    </Paragraph>
                </div>
                <div className='flex flex-col lg:flex-row w-full justify-between items-center gap-8'>
                    <SlideUp
                        ref={membership1Ref}
                        delay={0.5}
                        animationState={isDivInView && isMembership1RefInView}
                        styles={slideUpContainerStyle}>
                        <MembershipItem
                            name='day plan'
                            priceText='€15/1DAY'
                            hasGymAccess={false}
                            hasTrainingPrograms={false}
                        />
                    </SlideUp>
                    <SlideUp
                        ref={membership2Ref}
                        delay={0.5}
                        animationState={isDivInView && isMembership2RefInView}
                        styles={slideUpContainerStyle}>
                        <MembershipItem
                            name='monthly plan'
                            priceText='€30/M'
                            hasGymAccess={true}
                            hasTrainingPrograms={true}
                        />
                    </SlideUp>
                    <SlideUp
                        ref={membership3Ref}
                        delay={0.5}
                        animationState={isDivInView && isMembership3RefInView}
                        styles={slideUpContainerStyle}>
                        <MembershipItem
                            name='yearly plan'
                            priceText='€315/Y'
                            hasGymAccess={true}
                            hasTrainingPrograms={true}
                        />
                    </SlideUp>
                </div>
            </div>
        </Section>
    );
}
