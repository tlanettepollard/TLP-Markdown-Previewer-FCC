import React from 'react';
import './styles/Preview.css'

import marked from 'marked';


export const Preview (preview) => {
    const createMarkDown = () => {
        return { __html: marked(props.markDown) }
    }
    return (
        <div
            type="text"
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={createMarkDown()}>
        </div>
    )
}