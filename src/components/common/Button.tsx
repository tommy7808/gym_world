import { ParagraphStyle } from '../../utils';

interface ButtonProps {
    text: string;
    hasOutline: boolean;
    icon?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    const outlineStyles = props.hasOutline
        ? 'border-solid border-primary-300 border-2 hover:bg-primary-300'
        : 'bg-primary-300 hover:bg-transparent border-solid border-primary-300 border-2';
    return (
        <button
            onClick={props.onClick}
            className={`rounded-md flex items-center justify-center font-medium gap-4 px-8 md:px-12 py-2 md:py-4 ${ParagraphStyle.p1} ${outlineStyles}`}>
            {props.text}
            {props.icon && <img className='w-[24px] sm:w-[30px] xl:w-[36px]' src={props.icon} />}
        </button>
    );
}
