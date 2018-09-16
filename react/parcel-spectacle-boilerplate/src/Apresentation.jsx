import React from 'react'

/* spectacle components */
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from "spectacle"
import createTheme from "spectacle/lib/themes/default"

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const Apresentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress='bar'>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Spectacle Boilerplatee
      </Heading>
      <Appear>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          in order damn
        </Text>
      </Appear>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
      <Heading size={2} textColor="secondary">Heading 2</Heading>
      <Heading size={3} textColor="secondary">Heading 3</Heading>
      <Heading size={4} textColor="secondary">Heading 4</Heading>
      <Heading size={5} textColor="secondary">Heading 5</Heading>
      <Text size={6} textColor="secondary">Standard text</Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Standard List</Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
)

export default Apresentation
