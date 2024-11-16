import { ParagraphStyle, ParagraphSize } from '../../utils';

interface ParagraphProps {
    children: React.ReactNode;
    size: ParagraphSize;
    additionalStyles?: string;
}

export function Paragraph(props: ParagraphProps) {
    return <p className={`${ParagraphStyle[props.size]} ${props.additionalStyles ?? ''}`}>{props.children}</p>;
}
