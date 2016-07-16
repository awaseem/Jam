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
    this.state = { playPopIn: false };
    this.click = this.click.bind(this);
  }

  click() {
    this.setState({ playPopIn: true });
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
          <FadeIn autoplay delay={250}>
            <H2>Grid</H2>
            <div className="grid">
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
            </div>
            <hr></hr>
          </FadeIn>
          <FadeIn autoplay delay={500}>
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
          <FadeIn autoplay delay={750}>
            <H2>Buttons</H2>
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
            <hr></hr>
          </FadeIn>
          <FadeIn autoplay delay={1000}>
            <H2>Inputs</H2>
            <Row>
              <Col num="six">
                <Input label="Email" placeholder="test@test.com" type="email" />
              </Col>
              <Col num="six">
                <Input label="Name" placeholder="Jon Doe" type="text" />
              </Col>
              <Col num="twelve">
                <Dropdown label="What's your choice?" options={['hello', 'hi', 'heyy']} />
              </Col>
              <Col num="twelve">
                <TextArea label="Message" placeholder="Enter your message here" />
              </Col>
            </Row>
            <hr></hr>
          </FadeIn>
          <FadeIn autoplay delay={1250}>
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
          </FadeIn>
          <FadeIn autoplay delay={1500}>
            <H2>Images</H2>
            <Img src="http://efdreams.com/data_images/dreams/jam/jam-11.jpg" alt="test" />
            <hr></hr>
          </FadeIn>
          <FadeIn autoplay delay={1750}>
            <H2>Animations</H2>
            <PopIn autoplay play={this.state.playPopIn}>
              <Button onClick={this.click}>play</Button>
              <H1>Hello world</H1>
            </PopIn>
            <hr></hr>
          </FadeIn>
        </div>
      </div>
    );
  }
}

