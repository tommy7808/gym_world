import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/close.svg';
import { ParagraphStyle, sectionPadding } from '../utils';
import { Button, ButtonSize } from './common';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    function toggleMenu() {
        setIsMenuOpen((prevState) => !prevState);
    }

    // Close menu if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`w-full flex ${sectionPadding}`}>
            <div className='flex w-full items-center'>
                <img src={logo} alt='Gym World logo' className='w-[104px] xl:w-[139px]' />
            </div>
            <div className='hidden xl:flex w-full justify-center items-center'>
                <div className='flex md:gap-10 xl:gap-20'>
                    <a href='#hero' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Home
                    </a>
                    <a href='#programs' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Programs
                    </a>
                    <a href='#memberships' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Memberships
                    </a>
                </div>
            </div>
            <div className='flex w-full justify-end items-center'>
                <a href='#memberships'>
                    <Button
                        text='Join Us'
                        hasOutline={true}
                        size={ButtonSize.SMALL}
                        additionalStyles='hidden xl:flex'
                    />
                </a>
                <div className='xl:hidden relative' ref={menuRef}>
                    {!isMenuOpen && (
                        <button onClick={toggleMenu}>
                            <motion.img
                                src={menuIcon}
                                alt='menu button'
                                className='w-12 md:w-14'
                                animate={{
                                    rotate: !isMenuOpen ? 180 : 90,
                                }}
                            />
                        </button>
                    )}
                    {isMenuOpen && (
                        <button onClick={toggleMenu}>
                            <motion.img
                                src={closeIcon}
                                alt='close button'
                                className='w-12 md:w-14'
                                animate={{
                                    rotate: isMenuOpen ? 180 : 0,
                                }}
                            />
                        </button>
                    )}
                    {isMenuOpen && (
                        <nav className='w-auto min-w-fit flex flex-col gap-5 absolute bg-neutral-black-200 p-5 top-full left-[100%] transform -translate-x-[100%]'>
                            <a
                                href='#hero'
                                className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}
                                onClick={toggleMenu}>
                                Home
                            </a>
                            <a
                                href='#programs'
                                className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}
                                onClick={toggleMenu}>
                                Programs
                            </a>
                            <a
                                href='#memberships'
                                className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}
                                onClick={toggleMenu}>
                                Memberships
                            </a>
                            <a href='#memberships'>
                                <Button
                                    text='Join Us'
                                    hasOutline={true}
                                    size={ButtonSize.SMALL}
                                    additionalStyles='w-full self-center whitespace-nowrap'
                                />
                            </a>
                        </nav>
                    )}
                </div>
            </div>
        </nav>
    );
}
