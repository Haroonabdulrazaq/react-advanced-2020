import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();


const Mark = () => {
   let [text, setText] = React.useState(placeholder);
   
   const handleChange =(e)=>{
    setText(e.target.value)
   }
  return (
    <div>
      <h2>Mark Down Preveiwer</h2>
      <textarea 
      id="editor"
      type="textarea"
      cols="30"
      rows="8"
      value={text}
      onChange={(e)=> handleChange(e)}/>

      <h3>Output</h3>
      <Preview markdown={text} />
    </div>
   
  )
}

const Preview =({markdown})=>{
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
      id='preview'
    />
  )
}


export default Mark;

const placeholder = `# Welcome to my React Markdown Previewer!

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
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;