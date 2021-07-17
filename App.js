import React, { useState} from 'react';
import './App.css';
import Code_Editor from './Code_Editor';

export default function App() {
  
  //use useState to update value of html, css and js.
  
  const [myhtml, Html_func] = useState('')
  const [mycss, Css_func] = useState('')
  const [myjs, Js_func] = useState('')
  
  //The code variable will store the complete html code to pass to iframe
  
   const  code =`
        <html>
          <body>${myhtml}</body>
          <style>${mycss}</style>
          <script>${myjs}</script>
        </html>
      `
  //call Code_Editor file 3 times for HTMl Editor, Css Editor, Js Editor
      	//pass props including content(value), mode(xml,css,js) and onChange function.  
  return (
    <div className="App">
      <h1 align="center">Code Editor & Live View</h1>
      <div className="output">
      	<iframe  
      		title="Live View"
      		srcDoc={code}
      		width="100%"
      		height="100%"
      		
      	/>
      </div>
      <div className="code-area">
      	
      	
      	
		   <Code_Editor className="editor"
		   	lang="xml"
          	Name="HTML"
          	value={myhtml}
          	onChange={Html_func}
		    />
		    
		   <Code_Editor className="editor"
		   lang="css"
          Name="CSS"
          value={mycss}
          onChange={Css_func}
		   />
		   
		   <Code_Editor className="editor"
		    lang="javascript"
          Name="JS"
          value={myjs}
          onChange={Js_func}
		   />
		   
      </div>
      
      
    </div>
  );
}

