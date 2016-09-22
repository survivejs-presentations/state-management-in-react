// Import React
import React from "react";
import TweetEmbed from "react-tweet-embed";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Counter
import Counter from './counter';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  flux: require("../images/flux.png"),
  survivejs: require("../images/survivejs.png")
}, v => v.replace('/', ''));

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              State Management in React
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              The Problem of State
            </Heading>
            <List>
              <Appear><ListItem>Application state, UI state</ListItem></Appear>
              <Appear><ListItem>Where to push it?</ListItem></Appear>
              <Appear><ListItem>How to manipulate it?</ListItem></Appear>
              <Appear><ListItem>How to propagate changes to the UI?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Solutions
            </Heading>
            <List>
              <Appear><ListItem>Keep it all in React components (<b>App</b>?)</ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
              <Appear><ListItem><Link href="http://redux.js.org/">Redux</Link> - Flux taken to bare minimum</ListItem></Appear>
              <Appear><ListItem><Link href="https://mobxjs.github.io/mobx/">MobX</Link> - Observables, think spreadsheets</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Image src={images.flux} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              Redux
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Redux Briefly
            </Heading>
            <List>
              <Appear><ListItem>More of a guideline</ListItem></Appear>
              <Appear><ListItem>Utilities like <Link href="http://redux.js.org/docs/api/combineReducers.html">combineReducers</Link> to manage complexity &#8594; Single tree for state</ListItem></Appear>
              <Appear><ListItem>Actions == Something happened</ListItem></Appear>
              <Appear><ListItem>Reducers == How application state changes (pure!)</ListItem></Appear>
              <Appear><ListItem><Link href="https://github.com/gaearon/normalizr">Normalize</Link> to make it easier to write reducers</ListItem></Appear>
              <Appear><ListItem>Extend through middleware and solutions around Redux</ListItem></Appear>
              <Appear><ListItem>Strong ecosystem</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} className="redux-flow">
            <TweetEmbed id='727821044308967425' />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Minimal <Link href="http://redux.js.org/">Redux</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <Link href="http://redux.js.org/">Redux</Link> with a Store
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 1/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 2/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_04.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 3/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_05.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> Recap
            </Heading>
            <List>
              <Appear><ListItem>Split application to <b>containers</b> (connect) and <b>presentational</b> components</ListItem></Appear>
              <Appear><ListItem>Push <code>connect</code> as low in the hierarchy as possible to improve performance</ListItem></Appear>
              <Appear><ListItem>Use <Link href="https://github.com/reactjs/reselect">reselect</Link> to deal with derived data</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              MobX
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              MobX Briefly
            </Heading>
            <List>
              <Appear><ListItem>Modeled after spreadsheets</ListItem></Appear>
              <Appear><ListItem>Wraps data structures in observables</ListItem></Appear>
              <Appear><ListItem>Supports also <code>computed</code> data</ListItem></Appear>
              <Appear><ListItem>Mutable structures &#8594; Easier reference handling</ListItem></Appear>
              <Appear><ListItem>Use <code>autorun</code> for side effects (printing, persistency)</ListItem></Appear>
              <Appear><ListItem>Light alternative to Redux</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Minimal <Link href="https://mobxjs.github.io/mobx/">MobX</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Connecting Using <Link href="https://www.npmjs.com/package/mobx-react">mobx-react</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://www.npmjs.com/package/mobx-react">mobx-react</Link> Recap
            </Heading>
            <List>
              <Appear><ListItem>No distinction between container and presentational components</ListItem></Appear>
              <Appear><ListItem>Annotate all components that are specific to your application</ListItem></Appear>
              <Appear><ListItem>MobX deals with updating for you</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Push application <code>state</code> (amount) to Redux</ListItem></Appear>
              <Appear><ListItem>*Add another amount to track</ListItem></Appear>
              <Appear><ListItem>**Implement a MobX variant</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              Async
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              redux-thunk
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 1/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 2/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> Recap
            </Heading>
            <List>
              <Appear><ListItem>Split query to stages (request/success/failure)</ListItem></Appear>
              <Appear><ListItem>Return a thunk and trigger stages as you call the backend</ListItem></Appear>
              <Appear><ListItem>React to stages at reducers and alter state</ListItem></Appear>
              <Appear><ListItem>Consider pushing the API client to a middleware (looser coupling)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              redux-saga
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 1/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> 2/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_04.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> Recap
            </Heading>
            <List>
              <Appear><ListItem>Split query to stages (request/success/failure) as with thunks</ListItem></Appear>
              <Appear><ListItem>Instead of returning a thunk, operate with generators</ListItem></Appear>
              <Appear><ListItem>Your browser might need a polyfill for generators to work</ListItem></Appear>
              <Appear><ListItem>Easier to test due to the looser coupling by default</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              Async in MobX
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={4}>
              Async with <Link href="https://www.npmjs.com/package/mobx">MobX</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_async_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://www.npmjs.com/package/mobx">MobX</Link> Async Recap
            </Heading>
            <List>
              <Appear><ListItem>Works thanks to observables</ListItem></Appear>
              <Appear><ListItem>Consider using a flag to signify loading stage</ListItem></Appear>
              <Appear><ListItem>Structure as you like (API client etc.). ES6 classes can work.</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="https://facebook.github.io/relay/">Relay</Link> and <Link href="https://netflix.github.io/falcor/">Falcor</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Set Up a Mock Response at <Link href="http://www.mocky.io/">mocky.io</Link>. <b>Important!</b> Set <code>Access-Control-Allow-Origin</code> to <code>http://sandbox.webpackbin.com</code>.</ListItem></Appear>
              <Appear><ListItem>Configure <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> and perform a query against the resource</ListItem></Appear>
              <Appear><ListItem>*Implement a <Link href="https://www.npmjs.com/package/mobx">MobX</Link> variant</ListItem></Appear>
              <Appear><ListItem>**Implement a <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> variant</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Link href="http://www.survivejs.com/">
              <Heading size={1} textColor="primary">
                SurviveJS
              </Heading>
            </Link>
            <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
