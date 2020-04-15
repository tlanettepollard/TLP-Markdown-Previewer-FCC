import React from 'react';
import marked from 'marked';
import './App.css';
import './index.css';

import {Header} from '../src/components/Header';
import {Footer} from '../src/components/Footer';
import { findAllByPlaceholderText } from '@testing-library/react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximized: false,
      previewMaximized: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  handleEditorMaximize() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }
  handlePreviewMaximize() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }
  render() {
    const classes = this.state.editorMaximized ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress'] : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
    return ( 
    <div className = "App" >
      <Header />
        <div>
          <div className={classes[0]}>
            <Toolbar icon={classes[2]} onClick={this.handleEditorMaximize} text="Editor" />
            <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="converter"></div>
          <div className={classes[1]}>
            <Toolbar icon={classes[2]} onClick={this.handlePreviewMaximize} text="Previewer" />
          </div>
        </div>
      <Footer />

    </div>
    )
  }
}; 




export default App;
