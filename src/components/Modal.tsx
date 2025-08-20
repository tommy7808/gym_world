import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button, ButtonSize, Paragraph } from './common';
import { ParagraphSize, slideVariants } from '../utils';
import closeIcon from '../assets/icons/close.svg';
import rightArrowIcon from '../assets/icons/right-arrow.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalContentProps {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
}
const ModalContent = forwardRef(({ onOpen, onClose, isOpen }: ModalContentProps, ref) => {
    useEffect(() => {
        if (isOpen) {
            onOpen();
        }
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.dialog
                    // @ts-ignore
                    ref={ref}
                    {...slideVariants}
                    className={`flex flex-col w-[90%] md:w-3/4 max-w-[1203px] h-[60%] md:h-[70%] rounded-xl fixed top-0 text-white modal-img p-3`}>
                    <header className='flex w-full justify-end p-4'>
                        <button onClick={onClose}>
                            <img src={closeIcon} alt='close button' className='w-6 lg:w-9' loading='lazy' />
                        </button>
                    </header>
                    <div className='flex flex-col px-4 xl:px-[4rem] py-3 flex-1 justify-center items-center gap-[4rem]'>
                        <Paragraph
                            size={ParagraphSize.p1}
                            additionalStyles='text-[1.125rem] md:text-[1.5rem] xl:text-[2rem] text-center'>
                            Hi, this web application was built for demonstration purposes. As a result certain actions
                            are disabled.
                        </Paragraph>
                        <Button
                            size={ButtonSize.LARGE}
                            text='CONTINUE'
                            hasOutline={false}
                            icon={rightArrowIcon}
                            iconAlt='continue button icon'
                            onClick={onClose}
                        />
                    </div>
                </motion.dialog>
            )}
        </AnimatePresence>,
        document.getElementById('modal') as HTMLElement
    );
});

interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Modal(props: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    function openModal() {
        dialogRef.current?.showModal();
        props.setIsOpen(true);
    }

    function closeModal() {
        dialogRef.current?.close();
        props.setIsOpen(false);
    }

    return <ModalContent ref={dialogRef} onOpen={openModal} onClose={closeModal} isOpen={props.isOpen} />;
}
