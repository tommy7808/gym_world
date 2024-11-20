import { sectionPadding } from '../../utils';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    additionalStyles?: string;
    isFullScreen?: boolean;
}
export function Section({ additionalStyles, children, isFullScreen, id }: SectionProps) {
    return (
        <section
            id={id}
            className={`w-full flex flex-col py-9 justify-center items-center ${sectionPadding} ${
                additionalStyles ?? ''
            } ${isFullScreen ? 'h-full min-h-screen' : ''}`}>
            <div className={`w-full 2xl:max-w-[1616px] flex flex-col ${isFullScreen ? 'h-full' : ''}`}>{children}</div>
        </section>
    );
}
