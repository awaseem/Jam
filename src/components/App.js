import React from 'react';
import H1 from './typography/h1';
import H2 from './typography/h2';
import H3 from './typography/h3';
import H4 from './typography/h4';
import H5 from './typography/h5';
import H6 from './typography/h6';
import P from './typography/p';
import FadeIn from './animations/fadeIn';
import Button from './buttons/button';
import Input from './inputs/input';
import TextArea from './inputs/textArea';
import Dropdown from './inputs/dropdown';
import Code from './code/code';
import CodeBlock from './code/codeBlock';
import Ol from './list/ol';
import Li from './list/li';
import Ul from './list/ul';
import Img from './image/img';

export default function () {
  return (
    <div className="container">
      <FadeIn delay={250}>
        <H1 align="center">Jam</H1>
        <P align="center">Sweat and Simple</P>
      </FadeIn>
      <FadeIn delay={500}>
        <H2>Typography</H2>
        <H1>Heading</H1>
        <H2>Heading</H2>
        <H3>Heading</H3>
        <H4>Heading</H4>
        <H5>Heading</H5>
        <H6>Heading</H6>
        <P>Paragraph</P>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={750}>
        <H2>Buttons</H2>
        <P>Without color</P>
        <div className="row"><Button>Hello</Button></div>
        <P>With color</P>
        <div className="row">
          <div className="two columns">
            <Button color="red">Hello</Button>
          </div>
          <div className="two columns">
            <Button color="green">Hello</Button>
          </div>
          <div className="two columns">
            <Button color="black">Hello</Button>
          </div>
        </div>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={1000}>
        <H2>Inputs</H2>
        <div className="row">
          <div className="six columns">
            <Input label="Email" placeholder="test@test.com" type="email" />
          </div>
          <div className="six columns">
            <Input label="Name" placeholder="Jon Doe" type="text" />
          </div>
          <div className="twelve columns">
            <Dropdown label="What's your choice?" options={['hello', 'hi', 'heyy']} />
          </div>
          <div className="twelve columns">
            <TextArea label="Message" placeholder="Enter your message here" />
          </div>
        </div>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={1250}>
        <H2>Code</H2>
        <Code>Hello world!</Code>
        <CodeBlock>
          Hello world!<br />
          How are you?
        </CodeBlock>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={1250}>
        <H2>List</H2>
        <div className="row">
          <div className="six columns">
            <Ul>
              <Li>Item 1</Li>
              <Li>
                Item 2
                <Ul>
                  <Li>Item 2.1</Li>
                  <Li>Item 2.2</Li>
                </Ul>
              </Li>
              <Li>Item 3</Li>
            </Ul>
          </div>
          <div className="six columns">
            <Ol>
              <Li>Item 1</Li>
              <Li>
                Item 2
                <Ol>
                  <Li>Item 2.1</Li>
                  <Li>Item 2.2</Li>
                </Ol>
              </Li>
              <Li>Item 3</Li>
            </Ol>
          </div>
        </div>
        <hr></hr>
      </FadeIn>
      <FadeIn delay={1500}>
        <H2>Images</H2>
        <Img src="http://efdreams.com/data_images/dreams/jam/jam-11.jpg" alt="test" />
        <hr></hr>
      </FadeIn>
    </div>
  );
}

