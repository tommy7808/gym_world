import { sectionPadding } from '../../utils';

interface SectionProps {
    children: React.ReactNode;
    additionalStyles?: string;
    isFullScreen?: boolean;
}
export function Section({ additionalStyles, children, isFullScreen }: SectionProps) {
    return (
        <section
            className={`w-full flex flex-col py-9 justify-center items-center ${sectionPadding} ${
                additionalStyles ?? ''
            } ${isFullScreen ? 'h-full min-h-screen' : ''}`}>
            <div className={`w-full 2xl:max-w-[1616px] flex flex-col ${isFullScreen ? 'h-full' : ''}`}>{children}</div>
        </section>
    );
}
