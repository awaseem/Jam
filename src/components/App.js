import React from 'react';
import jump from 'jump.js'
import H1 from './typography/h1';
import H2 from './typography/h2';
import H3 from './typography/h3';
import H4 from './typography/h4';
import H5 from './typography/h5';
import H6 from './typography/h6';
import P from './typography/p';
import FadeIn from './animations/fadeIn';
import PopIn from './animations/popIn';
import PopOut from './animations/popOut';
import FadeOut from './animations/fadeOut';
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
import Row from './grid/row';
import Col from './grid/col';
import TextCenter from './helpers/centerText';
import Container from './helpers/container';
import Header from './header/header';
import Hr from './misc/hr';
import Link from './misc/link';
import Bold from './misc/bold';
import Emp from './misc/emp';
import Underline from './misc/underline';
import css from '../css/skeleton.css';
import customCss from '../css/website.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playPopIn: false, playFadeIn: false, playPopOut: false, playFadeOut: false };
    this.clickPopIn = this.clickPopIn.bind(this);
    this.clickFadeIn = this.clickFadeIn.bind(this);
    this.clickFadeOut = this.clickFadeOut.bind(this);
    this.clickPopOut = this.clickPopOut.bind(this);
  }

  clickLetGetStarted() {
    jump('#getting-started', {
      duration: 500,
      offset: 0,
      callback: undefined,
      a11y: false,
    });
  }

  clickPopIn() {
    this.setState({
      playPopIn: true,
      playFadeIn: false,
      playPopOut: false,
      playFadeOut: false,
    });
  }

  clickFadeIn() {
    this.setState({
      playFadeIn: true,
      playPopIn: false,
      playPopOut: false,
      playFadeOut: false,
    });
  }

  clickPopOut() {
    this.setState({
      playFadeIn: false,
      playPopIn: false,
      playPopOut: true,
      playFadeOut: false,
    });
  }

  clickFadeOut() {
    this.setState({
      playFadeIn: false,
      playPopIn: false,
      playPopOut: false,
      playFadeOut: true,
    });
  }

  emailInput(value) {
    console.log(value);
  }

  nameInput(value) {
    console.log(value);
  }

  dropdownInput(value) {
    console.log(value);
  }

  messageTextArea(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <FadeIn autoplay delay={250}>
          <Header image="http://i.imgur.com/wC0tc3e.png" height="75vh">
            <H1 align="center">Jam</H1>
            <P align="center">Sweet and Simple</P>
            <TextCenter>
              <Button click={this.clickLetGetStarted} color="black">Let's Get Started</Button>
            </TextCenter>
          </Header>
        </FadeIn>
        <Container>
          <FadeIn autoplay delay={500}>
            <div id="about-section">
              <H2>About</H2>
              <P>
                Jam is a simple set of React components that I use in my projects moving forward.
                It's built on my favorite CSS framework <Link href="http://getskeleton.com/">Skeleton</Link>.
                Just like Skeleton,
                Jam is only a handful of components and doesn't include all the bells and whistles
                (you can always add that yourself).
                If you like the way it looks and feels give it a try!
              </P>
              <Hr />
            </div>
            <div id="getting-started">
              <H2>Getting Started</H2>
              <P>
                Simply install Jam via npm and ensure React and React-Dom are avaliable:
              </P>
              <CodeBlock>
                npm install jam-components --save
              </CodeBlock>
              <P>
                Then Import the component you'd like to use:
              </P>
              <CodeBlock>
              {
                `Import React from 'react';\nImport ReactDom from 'react-dom';
Import { Button } from 'jam-components';`
              }
              </CodeBlock>
              <Hr />
            </div>
            <div className="grid">
              <H2>Grid</H2>
              <P>
                Same grid as Skeleton,
                <em>12-column fluid grid</em> that shrinks on smaller devices.
                All rows and columns are wrapped with simple
                React components making it easier to create responsive sites.
                Try it by changing the browsers size!
              </P>
              <TextCenter>
                <Row>
                  <div className={`${css.one} ${css.column} ${customCss.col}`}>
                    One
                  </div>
                  <div className={`${css.eleven} ${css.columns} ${customCss.col}`}>
                    Eleven
                  </div>
                </Row>
                <Row>
                  <div className={`${css.two} ${css.columns} ${customCss.col}`}>
                    Two
                  </div>
                  <div className={`${css.ten} ${css.columns} ${customCss.col}`}>
                    Ten
                  </div>
                </Row>
                <Row>
                  <div className={`${css.three} ${css.columns} ${customCss.col}`}>
                    Three
                  </div>
                  <div className={`${css.nine} ${css.columns} ${customCss.col}`}>
                    Nine
                  </div>
                </Row>
                <Row>
                  <div className={`${css.four} ${css.columns} ${customCss.col}`}>
                    Four
                  </div>
                  <div className={`${css.eight} ${css.columns} ${customCss.col}`}>
                    Eight
                  </div>
                </Row>
                <Row>
                  <div className={`${css.five} ${css.columns} ${customCss.col}`}>
                    Five
                  </div>
                  <div className={`${css.seven} ${css.columns} ${customCss.col}`}>
                    Seven
                  </div>
                </Row>
                <Row>
                  <div className={`${css.six} ${css.columns} ${customCss.col}`}>
                    Six
                  </div>
                  <div className={`${css.six} ${css.columns} ${customCss.col}`}>
                    Six
                  </div>
                </Row>
                <Row>
                  <div className={`${css.seven} ${css.columns} ${customCss.col}`}>
                    Seven
                  </div>
                  <div className={`${css.five} ${css.columns} ${customCss.col}`}>
                    Five
                  </div>
                </Row>
                <Row>
                  <div className={`${css.eight} ${css.columns} ${customCss.col}`}>
                    Eight
                  </div>
                  <div className={`${css.four} ${css.columns} ${customCss.col}`}>
                    Four
                  </div>
                </Row>
                <Row>
                  <div className={`${css.nine} ${css.columns} ${customCss.col}`}>
                    Nine
                  </div>
                  <div className={`${css.three} ${css.columns} ${customCss.col}`}>
                    Three
                  </div>
                </Row>
                <Row>
                  <div className={`${css.ten} ${css.columns} ${customCss.col}`}>
                    Ten
                  </div>
                  <div className={`${css.two} ${css.columns} ${customCss.col}`}>
                    Two
                  </div>
                </Row>
                <Row>
                  <div className={`${css.eleven} ${css.columns} ${customCss.col}`}>
                    Eleven
                  </div>
                  <div className={`${css.one} ${css.column} ${customCss.col}`}>
                    One
                  </div>
                </Row>
              </TextCenter>
              <CodeBlock>
{`<Row>
  <Col num="one">
    One
  </Col>
  <Col num="eleven">
    Eleven
  </Col>
</Row>
<Row>
  <Col num="two">
    Two
  </Col>
  <Col num="ten">
    Ten
  </Col>
</Row>
<Row>
  <Col num="three">
    Three
  </Col>
  <Col num="nine">
    Nine
  </Col>
</Row>
<Row>
  <Col num="four">
    Four
  </Col>
  <Col num="eight">
    Eight
  </Col>
</Row>
<Row>
  <Col num="five">
    Five
  </Col>
  <Col num="seven">
    Seven
  </Col>
</Row>
<Row>
  <Col num="six">
    Six
  </Col>
  <Col num="six">
    Six
  </Col>
</Row>
<Row>
  <Col num="seven">
    Seven
  </Col>
  <Col num="five">
    Five
  </Col>
</Row>
<Row>
  <Col num="eight">
    Eight
  </Col>
  <Col num="four">
    Four
  </Col>
</Row>
<Row>
  <Col num="nine">
    Nine
  </Col>
  <Col num="three">
    Three
  </Col>
</Row>
<Row>
  <Col num="ten">
    Ten
  </Col>
  <Col num="two">
    Two
  </Col>
</Row>
<Row>
  <Col num="eleven">
    Eleven
  </Col>
  <Col num="one">
    One
  </Col>
</Row>`}
              </CodeBlock>
              <H4>Col</H4>
              <P>
                Column component used for the grid.
              </P>
              <H5>Props</H5>
              <P><em>num: String</em></P>
              <P>
                The number of columns in string form.
              </P>
              <CodeBlock>
                {"<Col num=\"one\"></Col>"}
              </CodeBlock>
              <H4>Row</H4>
              <P>
                Row component used for the grid.
              </P>
              <CodeBlock>
                {"<Row></Row>"}
              </CodeBlock>
              <Hr />
            </div>
            <div className="typography">
              <H2>Typography</H2>
              <Row>
                <Col num="six">
                  <P>
                    Typography is also similar to Skeleton but every
                    header and paragraph is wrapped
                    in a React component.
                    So each tag starts with a capital instead.
                    Other type basics like <Link href="">anchors</Link>,
                    <Bold>strong</Bold>, <Emp>emphasis</Emp>,
                    and <Underline>underline</Underline> are all obviously included.
                  </P>
                  <P>
                    The typography base is <Link href="https://www.google.com/fonts/specimen/Lato">Lato Light</Link> served by Google,
                    set at 15rem (15px) over a 1.6 line height (24px).
                  </P>
                  <H5>Props</H5>
                  <P><Emp>align: String</Emp></P>
                  <P>The text alignment for alignment.</P>
                  <CodeBlock>
                  {`<H1>Heading</H1>
<H2>Heading</H2>
<H3>Heading</H3>
<H4>Heading</H4>
<H5>Heading</H5>
<H6>Heading</H6>
<P>Paragraph</P>`}
                  </CodeBlock>
                </Col>
                <Col num="six">
                  <H1>Heading</H1>
                  <H2>Heading</H2>
                  <H3>Heading</H3>
                  <H4>Heading</H4>
                  <H5>Heading</H5>
                  <H6>Heading</H6>
                  <P>Paragraph</P>
                </Col>
              </Row>
              <Hr />
            </div>
            <div className="buttons">
              <H2>Buttons</H2>
              <P>
                Buttons come in a variety of colors and no color. Each button
                has colorful animation that makes the button pop on mouse overs.
                Unlike Skeleton, buttons only come in one type.
              </P>
              <P>Without color</P>
              <Row><Button>Hello</Button></Row>
              <P>With color</P>
              <Row>
                <Col num="two">
                  <Button color="red">Hello</Button>
                </Col>
                <Col num="two">
                  <Button color="green">Hello</Button>
                </Col>
                <Col num="two">
                  <Button color="black">Hello</Button>
                </Col>
                <Col num="two">
                  <Button color="blue">Hello</Button>
                </Col>
              </Row>
              <CodeBlock>
              {
                `<Button>Hello</Button>
<Button color="red">Hello</Button>
<Button color="green">Hello</Button>
<Button color="black">Hello</Button>
<Button color="blue">Hello</Button>`
              }
              </CodeBlock>
              <H5>Props</H5>
              <P><Emp>color: String</Emp></P>
              <P>Buttons can only be range of certian colors: red, green, black, blue.</P>
              <P><Emp>click: Function</Emp></P>
              <P>Function to fire when the button is clicked.</P>
              <P><Emp>doubleClick: Function</Emp></P>
              <P>Function to fire when the button is double clicked.</P>
              <Hr />
            </div>
            <div className="input">
              <H2>Inputs</H2>
              <P>
                Inputs are nice and easy to use.
                They all expose functions that allow you to retrive user inputs
                and have pop animation when focused.
              </P>
              <Row>
                <Col num="six">
                  <Input
                    change={this.emailInput}
                    label="Email" placeholder="test@test.com" type="email"
                  />
                </Col>
                <Col num="six">
                  <Input change={this.nameInput} label="Name" placeholder="Jon Doe" type="text" />
                </Col>
                <Col num="twelve">
                  <Dropdown
                    change={this.dropdownInput}
                    label="What's your choice?" options={['hello', 'hi', 'heyy']}
                  />
                </Col>
                <Col num="twelve">
                  <TextArea
                    change={this.messageTextArea}
                    label="Message" placeholder="Enter your message here"
                  />
                </Col>
              </Row>
              <CodeBlock>
                {
                  `<Input
  change={this.emailInput}
  label="Email" placeholder="test@test.com" type="email"
/>
<Input change={this.nameInput} label="Name" placeholder="Jon Doe" type="text" />
<Dropdown
  change={this.dropdownInput}
  label="What's your choice?" options={['hello', 'hi', 'heyy']}
/>
<TextArea
  change={this.messageTextArea}
  label="Message" placeholder="Enter your message here"
/>`}
              </CodeBlock>
              <Row>
                <Col num="four">
                  <H4>Input</H4>
                  <P>Simple text input.</P>
                  <H5>Props</H5>
                  <P><Emp>label: String</Emp></P>
                  <P>Label for the text input.</P>
                  <P><Emp>type: String</Emp></P>
                  <P>Type for the text input.</P>
                  <P><Emp>placeholder: String</Emp></P>
                  <P>Placeholder for the text input.</P>
                  <P><Emp>name: String</Emp></P>
                  <P>Name for the text input.</P>
                  <P><Emp>value: String</Emp></P>
                  <P>Default value for the text input</P>
                  <P><Emp>maxLength: Number</Emp></P>
                  <P>Max length for the text input.</P>
                  <P><Emp>disabled: Boolean</Emp></P>
                  <P>Disable the input if set to true.</P>
                  <P><Emp>required: Boolean</Emp></P>
                  <P>Required input if set to true.</P>
                  <P><Emp>change: Function</Emp></P>
                  <P>Function fired when the input changes.</P>
                </Col>
                <Col num="four">
                  <H4>Dropdown</H4>
                  <P>Simple dropdown.</P>
                  <H5>Props</H5>
                  <P><Emp>label: String</Emp></P>
                  <P>Label for the text input.</P>
                  <P><Emp>options: Array</Emp></P>
                  <P>An array of options for the dropdown.</P>
                  <P><Emp>name: String</Emp></P>
                  <P>Name for the text input.</P>
                  <P><Emp>disabled: Boolean</Emp></P>
                  <P>Disable the input if set to true.</P>
                  <P><Emp>required: Boolean</Emp></P>
                  <P>Required input if set to true.</P>
                  <P><Emp>change: Function</Emp></P>
                  <P>Function fired when the input changes.</P>
                </Col>
                <Col num="four">
                  <H4>Text Area</H4>
                  <P>Simple text area.</P>
                  <H5>Props</H5>
                  <P><Emp>label: String</Emp></P>
                  <P>Label for the text input.</P>
                  <P><Emp>type: String</Emp></P>
                  <P>Type for the text input.</P>
                  <P><Emp>placeholder: String</Emp></P>
                  <P>Placeholder for the text input.</P>
                  <P><Emp>name: String</Emp></P>
                  <P>Name for the text input.</P>
                  <P><Emp>value: String</Emp></P>
                  <P>Default value for the text input</P>
                  <P><Emp>maxLength: Number</Emp></P>
                  <P>Max length for the text input.</P>
                  <P><Emp>disabled: Boolean</Emp></P>
                  <P>Disable the input if set to true.</P>
                  <P><Emp>required: Boolean</Emp></P>
                  <P>Required input if set to true.</P>
                  <P><Emp>change: Function</Emp></P>
                  <P>Function fired when the input changes.</P>
                </Col>
              </Row>
              <Hr />
            </div>
            <div className="code">
              <H2>Code</H2>
              <P>
                Code is pretty basic,
                one can be used for inlines with
                <Code>{'<Code>'}</Code> like this: <Code>Hello world!</Code>
                or within a block (<Code>{'<CodeBlock>'}</Code>) like this:
              </P>
              <CodeBlock>
                {`Hello World\nHow are you?`}
              </CodeBlock>
              <Hr />
            </div>
            <div className="List">
              <H2>List</H2>
              <P>
                Both lists use <Code>{'<Li>'}</Code>
                for the list item, but come in two flavors.
              </P>
              <Row>
                <Col num="six">
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
                  <H4>Unordered List</H4>
                  <CodeBlock>
                  {
                    `<Ul>
  <Li>Item 1</Li>
  <Li>
    Item 2
    <Ul>
      <Li>Item 2.1</Li>
      <Li>Item 2.2</Li>
    </Ul>
  </Li>
  <Li>Item 3</Li>
</Ul>`
                  }
                  </CodeBlock>
                </Col>
                <Col num="six">
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
                  <H4>Ordered List</H4>
                  <CodeBlock>
                  {
                    `<Ol>
  <Li>Item 1</Li>
  <Li>
    Item 2
    <Ol>
      <Li>Item 2.1</Li>
      <Li>Item 2.2</Li>
    </Ol>
  </Li>
  <Li>Item 3</Li>
</Ol>`
                  }
                  </CodeBlock>
                </Col>
              </Row>
              <Hr />
            </div>
            <div className="image">
              <H2>Images</H2>
              <P>
                Images are pretty standard with basic props,
                but also fades in when they are loaded.
              </P>
              <Img src="http://s.realtyninja.com/static/media/med/2738_317908a6_peace-bridge-skyline-calgary-xl.jpg" alt="test" />
              <CodeBlock>
              {
                '<Img src="http://s.realtyninja.com/static/media/med/2738_317908a6_peace-bridge-skyline-calgary-xl.jpg" alt="test" />'
              }
              </CodeBlock>
              <H5>Props</H5>
              <P><Emp>src: String</Emp></P>
              <P>Image source.</P>
              <P><Emp>alt: String</Emp></P>
              <P>Image alt.</P>
              <P><Emp>duration: Number</Emp></P>
              <P>Animation duration after the image is loaded.</P>
              <P><Emp>delay: Number</Emp></P>
              <P>Animation delay after the image is loaded.</P>
              <P><Emp>width: String</Emp></P>
              <P>Image width (can be a CSS property).</P>
              <P><Emp>height: String</Emp></P>
              <P>Image height (can be a CSS property).</P>
              <Hr />
            </div>
            <div className="animations">
              <H2>Animations</H2>
              <P>
                All animations share the same props that
                trigger and change the animation itself.
                To animate a component simply wrap it within the animation and trigger it manually
                or on its mount.
              </P>
              <H4>Pop In</H4>
              <Row>
                <Col num="six">
                  <CodeBlock>
                  {
                    `<PopIn autoplay play={this.state.playPopIn}>
  <H5>Hello world, I'll Pop In!</H5>
</PopIn>`
                  }
                  </CodeBlock>
                </Col>
                <Col num="six">
                  <PopIn autoplay play={this.state.playPopIn}>
                    <H5>Hello World, I'll Pop In!</H5>
                  </PopIn>
                  <Button click={this.clickPopIn}>play</Button>
                </Col>
              </Row>
              <H4>Fade In</H4>
              <Row>
                <Col num="six">
                  <CodeBlock>
                  {
                    `<FadeIn autoplay play={this.state.playFadeIn}>
  <H5>Hello World, I'll Fade In!</H5>
</FadeIn>`
                  }
                  </CodeBlock>
                </Col>
                <Col num="six">
                  <FadeIn autoplay play={this.state.playFadeIn} delay={0}>
                    <H5>Hello World, I'll Fade In!</H5>
                  </FadeIn>
                  <Button click={this.clickFadeIn}>play</Button>
                </Col>
              </Row>
              <H4>Pop Out</H4>
              <Row>
                <Col num="six">
                  <CodeBlock>
                  {
                    `<PopOut play={this.state.playPopOut}>
  <H5>Hello World, I'll Pop In!</H5>
</PopOut>`
                  }
                  </CodeBlock>
                </Col>
                <Col num="six">
                  <PopOut play={this.state.playPopOut}>
                    <H5>Hello World, I'll Pop In!</H5>
                  </PopOut>
                  <Button click={this.clickPopOut}>play</Button>
                </Col>
              </Row>
              <H4>Fade Out</H4>
              <Row>
                <Col num="six">
                  <CodeBlock>
                  {
                    `<FadeOut play={this.state.playFadeOut} delay={0}>
  <H5>Hello World, I'll Fade In!</H5>
</FadeOut>`
                  }
                  </CodeBlock>
                </Col>
                <Col num="six">
                  <FadeOut play={this.state.playFadeOut} delay={0}>
                    <H5>Hello World, I'll Fade In!</H5>
                  </FadeOut>
                  <Button click={this.clickFadeOut}>play</Button>
                </Col>
              </Row>
              <H5>Props</H5>
              <P><Emp>duration: Number</Emp></P>
              <P>Animation duration.</P>
              <P><Emp>delay: Number</Emp></P>
              <P>Animation delay.</P>
              <P><Emp>play: Boolean</Emp></P>
              <P>If this props is set to true the animation will play.</P>
              <P><Emp>autoplay: String</Emp></P>
              <P>Animation will play on mount.</P>
              <Hr />
            </div>
            <div className="helpers">
              <H2>Helpers</H2>
              <P>
                There are simple helper that can help center text,
                center content, and create centered containers.
              </P>
              <H4>Container</H4>
              <P>Main centered wrapper.</P>
              <CodeBlock>{'<Container></Container>'}</CodeBlock>
              <H4>TextCenter</H4>
              <P>Center text.</P>
              <CodeBlock>{'<TextCenter></TextCenter>'}</CodeBlock>
              <H4>Center</H4>
              <P>Center content like images.</P>
              <CodeBlock>{'<Center></Center>'}</CodeBlock>
              <Hr />
            </div>
            <div className="miscellaneous">
              <H2>Miscellaneous</H2>
              <H4>Link</H4>
              <P>Wrapper around anchor with href.</P>
              <CodeBlock>{'<Link href="http://url">Hello!</Link>'}</CodeBlock>
              <H5>Props</H5>
              <P><em>href: String</em></P>
              <P>Link for anchor.</P>
              <H4>Hr</H4>
              <P>Wrapper around thematic break.</P>
              <CodeBlock>{'<Hr />'}</CodeBlock>
              <H4>Emp</H4>
              <P>Wrapper around emphasis.</P>
              <CodeBlock>{'<Emp></Emp>'}</CodeBlock>
              <H4>Bold</H4>
              <P>Wrapper around bold.</P>
              <CodeBlock>{'<Bold></Bold>'}</CodeBlock>
              <H4>Underline</H4>
              <P>Wrapper around underline.</P>
              <CodeBlock>{'<Underline></Underline>'}</CodeBlock>
            </div>
            <TextCenter>
              <H6>Made with {'<3'} by <Link href="https://aliwaseem.com">Ali Waseem</Link></H6>
            </TextCenter>
          </FadeIn>
        </Container>
      </div>
    );
  }
}

