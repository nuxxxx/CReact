import { Fragment, createElement } from "../../main/render";
import { Title, Paragraph, CodeBlock, CodeWrap, Icon, Container, IconLink } from "../components";
import { links } from "../utils";


export const StartScreen = ({ onChange, lang }) => {
  return (
    <Container className="start-screen">
      <Icon name="react" />

      <Title>{lang[0]}</Title>

      <Paragraph>{lang[1]}</Paragraph>

      <button className="start-screen__button" onClick={() => onChange(1)}>{lang[2]}</button>

      <div className="start-screen__links">
        {links.map(link => (
          <IconLink {...link} key={link.href} />
        ))}
      </div>
    </Container>
  );
};