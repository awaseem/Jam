import React from 'react';
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
import Header from './header/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playPopIn: false, playFadeIn: false, playPopOut: false, playFadeOut: false };
    this.clickPopIn = this.clickPopIn.bind(this);
    this.clickFadeIn = this.clickFadeIn.bind(this);
    this.clickFadeOut = this.clickFadeOut.bind(this);
    this.clickPopOut = this.clickPopOut.bind(this);
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
            <TextCenter><Button color="black">Let's Get Started</Button></TextCenter>
          </Header>
        </FadeIn>
        <div className="container">
          <FadeIn autoplay delay={500}>
            <div id="about-section">
              <H2>About</H2>
              <P>
                Jam is a simple set of React components that I use in my projects moving forward.
                It's built on my favorite CSS framework <a href="http://getskeleton.com/">Skeleton</a>.
                Just like Skeleton,
                Jam is only a handful of components and doesn't include all the bells and whistles
                (you can always add that yourself).
                If you like the way it looks and feels give it a try!
              </P>
              <hr></hr>
            </div>
            <div id="getting-started">
              <H2>Getting Started</H2>
              <P>
                Simply install Jam via npm:
              </P>
              <CodeBlock>
                npm install Jam --save
              </CodeBlock>
              <P>
                Then Import the component you'd like to use:
              </P>
              <CodeBlock>
              {
                `Import React from 'react';\nImport { Button } from 'jam';`
              }
              </CodeBlock>
              <hr></hr>
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
                The number of columns in string form
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
              <hr></hr>
            </div>
            <div className="typography">
              <H2>Typography</H2>
              <Row>
                <Col num="six">
                  <P>
                    Typography is also similar to Skeleton but every
                    header and paragraph is wrapped
                    in a React component.
                    So each tag starts with a Capital instead.
                    Other type basics like <a href="">anchors</a>, <b>strong</b>, <em>emphasis</em>,
                    and <u>underline</u> are all obviously included.
                  </P>
                  <P>
                    The typography base is <a href="https://www.google.com/fonts/specimen/Lato">Lato Light</a> served by Google,
                    set at 15rem (15px) over a 1.6 line height (24px).
                  </P>
                  <H5>Props</H5>
                  <P><em>align: String</em></P>
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
              <hr></hr>
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
              <P><em>color: String</em></P>
              <P>Buttons can only be range of certian colors: red, green, black, blue</P>
              <P><em>click: Function</em></P>
              <P>Function to fire when the button is clicked.</P>
              <P><em>doubleClick: Function</em></P>
              <P>Function to fire when the button is double clicked.</P>
              <hr></hr>
            </div>
            <H2>Inputs</H2>
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
            <hr></hr>
            <H2>Code</H2>
            <Code>Hello world!</Code>
            <CodeBlock>
              Hello world!<br />
              How are you?
            </CodeBlock>
            <hr></hr>
            <H2>List</H2>
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
              </Col>
            </Row>
            <hr></hr>
            <H2>Images</H2>
            <Img src="http://efdreams.com/data_images/dreams/jam/jam-11.jpg" alt="test" />
            <hr></hr>
            <H2>Animations</H2>
            <H3>Pop In</H3>
            <PopIn autoplay play={this.state.playPopIn}>
              <H4>Hello world, I'll Pop In!</H4>
            </PopIn>
            <Button click={this.clickPopIn}>play</Button>
            <H3>Fade In</H3>
            <FadeIn autoplay play={this.state.playFadeIn} delay={0}>
              <H4>Hello world, I'll Fade In!</H4>
            </FadeIn>
            <Button click={this.clickFadeIn}>play</Button>
            <PopOut play={this.state.playPopOut}>
              <H4>Hello world, I'll Pop In!</H4>
            </PopOut>
            <Button click={this.clickPopOut}>play</Button>
            <H3>Fade Out</H3>
            <FadeOut play={this.state.playFadeOut} delay={0}>
              <H4>Hello world, I'll Fade In!</H4>
            </FadeOut>
            <Button click={this.clickFadeOut}>play</Button>
            <hr></hr>
          </FadeIn>
        </div>
      </div>
    );
  }
}

