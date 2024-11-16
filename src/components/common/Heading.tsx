import { HeaderStyle, HeadingSize } from '../../utils';

interface HeadingProps {
    children: React.ReactNode;
    size: HeadingSize;
    additionalStyles?: string;
}

export function Heading(props: HeadingProps) {
    return (
        <props.size className={`${HeaderStyle[props.size]} ${props.additionalStyles ?? ''}`}>
            {props.children}
        </props.size>
    );
}
