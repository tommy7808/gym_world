import { ParagraphSize, ParagraphStyle } from '../../utils';

interface ButtonProps {
    text: string;
    hasOutline: boolean;
    icon?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className={`rounded-md flex items-center justify-center font-medium gap-4 px-8 md:px-12 py-2 md:py-4 ${ParagraphStyle.p1} bg-primary-300`}>
            {props.text}
            {props.icon && <img className='w-[24px] sm:w-[30px] xl:w-[36px]' src={props.icon} />}
        </button>
    );
}
