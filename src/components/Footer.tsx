import { sectionPadding } from '../utils';
import logo from '../assets/images/logo.png';
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';

export function Footer() {
    return (
        <footer className={`w-full bg-neutral-black-200 py-20 justify-center items-center ${sectionPadding}`}>
            <div className='flex flex-col lg:flex-row gap-[7.375rem] justify-center items-center lg:items-start'>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={logo} alt='Gym World logo' className='w-[104px] xl:w-[139px]' />
                    <div className='flex gap-9'>
                        <img src={instagramIcon} alt='instagram' className='w-6 xl:w-8' />
                        <img src={twitterIcon} alt='twitter' className='w-6 xl:w-8' />
                        <img src={facebookIcon} alt='facebook' className='w-6 xl:w-8' />
                    </div>
                </div>
                <div className='flex gap-16 flex-wrap'>
                    <div className='flex flex-col gap-8'>
                        <span className='text-xl text-primary-300 font-medium'>Company</span>
                        <div className='flex flex-col gap-2'>
                            <a href='#' className='text-base font-light'>
                                Home
                            </a>
                            <a href='#' className='text-base font-light'>
                                Programs
                            </a>
                            <a href='#' className='text-base font-light'>
                                Memberships
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <span className='text-xl text-primary-300 font-medium'>Help</span>
                        <div className='flex flex-col gap-2'>
                            <span className='text-base font-light'>Customer Support</span>
                            <span className='text-base font-light'>Terms & Confitions</span>
                            <span className='text-base font-light'>Privacy Policy</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <span className='text-xl text-primary-300 font-medium'>Contact Us</span>
                        <div className='flex flex-col gap-2'>
                            <span className='text-base font-light'>+123456789</span>
                            <span className='text-base font-light'>gymworld@gmail.com</span>
                            <span className='text-base font-light'>street 96, Ireland</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
