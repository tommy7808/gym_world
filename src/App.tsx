import { HeadingSize, ParagraphSize } from './utils';
import { Heading, Paragraph } from './components';
import './index.css';

function App() {
    return (
        <>
            <Heading size={HeadingSize.h1}>Hello World!</Heading>
            <Heading size={HeadingSize.h2}>Hello World!</Heading>
            <Heading size={HeadingSize.h3}>Hello World!</Heading>
            <Heading size={HeadingSize.h4}>Hello World!</Heading>
            <Paragraph size={ParagraphSize.p1}>This is a p1 paragraph</Paragraph>
            <Paragraph size={ParagraphSize.p2}>This is a p2 paragraph</Paragraph>
            <Paragraph size={ParagraphSize.p3}>This is a p3 paragraph</Paragraph>
        </>
    );
}

export default App;
