import { ParagraphStyle } from '../../utils';

export enum ButtonSize {
    SMALL = 'SMALL',
    LARGE = 'LARGE',
}
interface ButtonProps {
    text: string;
    hasOutline: boolean;
    size: ButtonSize;
    icon?: string;
    additionalStyles?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    let buttonPadding;
    switch (props.size) {
        case ButtonSize.SMALL: {
            buttonPadding = 'px-8 md:px-12 py-2';
            break;
        }

        case ButtonSize.LARGE: {
            buttonPadding = 'px-8 md:px-12 py-2 md:py-3 lg:py-4';
            break;
        }

        default:
            break;
    }
    const outlineStyles = props.hasOutline
        ? 'border-solid border-primary-300 border-2 hover:bg-primary-300'
        : 'bg-primary-300 hover:bg-transparent border-solid border-primary-300 border-2';
    return (
        <button
            onClick={props.onClick}
            className={`rounded-md flex items-center justify-center font-medium gap-4 ${buttonPadding} ${
                ParagraphStyle.p1
            } ${outlineStyles} ${props.additionalStyles ?? ''}`}>
            {props.text}
            {props.icon && <img className='w-[24px] sm:w-[30px] xl:w-[36px]' src={props.icon} />}
        </button>
    );
}
