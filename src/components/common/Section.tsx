import { sectionPadding } from '../../utils';

interface SectionProps {
    children: React.ReactNode;
    additionalStyles?: string;
}
export function Section({ additionalStyles, children }: SectionProps) {
    return (
        <section className={`w-full h-full flex flex-col py-9 ${sectionPadding} ${additionalStyles ?? ''}`}>
            <div className='w-full h-full 2xl:max-w-[1616px] flex flex-col'>{children}</div>
        </section>
    );
}
