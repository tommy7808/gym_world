import logo from '../assets/images/logo.png';
import { ParagraphStyle } from '../utils';
import { Button, ButtonSize } from './common';

export function Navbar() {
    return (
        <nav className='w-full flex px-6 md:px-[4.625rem] lg:px-[5.5rem]'>
            <div className='flex w-full items-center'>
                <img src={logo} alt='Gym World logo' />
            </div>
            <div className='hidden lg:flex w-full justify-center items-center'>
                <div className='flex md:gap-10 xl:gap-20'>
                    <a href='#' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Home
                    </a>
                    <a href='#' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Programs
                    </a>
                    <a href='#' className={`${ParagraphStyle.p1} font-medium hover:text-primary-300`}>
                        Memberships
                    </a>
                </div>
            </div>
            <div className='flex w-full justify-end items-center'>
                <Button text='Join Us' hasOutline={true} size={ButtonSize.SMALL} />
            </div>
        </nav>
    );
}
