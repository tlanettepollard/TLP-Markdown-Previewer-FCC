import React from 'react';
import ReactDOM from "react-dom";
import marked from 'marked';
import './App.css';
import './index.css';

import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';

//Allows line breaks with the return button
marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  // eslint-disable-next-line
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    //const classes = this.state.editorMaximized ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] : this.state.previewMaximized ? ['editorWrap hide', 'previewWrap maximized','fa fa-compress'] : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return (
      <div>
        <Header />
        <div className="appWrap">
          <div className="editorWrap"
          >
            <Toolbar text="Editor" />
            <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="previewWrap"
          >
            <Toolbar text="Previewer" />
            <Previewer markdown={this.state.markdown} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <i title="rebel-cow" className="fa fa-free-code-camp"/>
      {props.text}
      <i onClick={props.onClick} className={props.icon}></i>
    </div>
  );
};

const Editor = (props) => {
  return (
    <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text" />
  );
};

const Previewer = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, {renderer: renderer })}} />
  );
};


const placeholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;



export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);