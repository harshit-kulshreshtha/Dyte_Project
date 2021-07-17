import React , {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/theme/dracula.css'
import {Controlled as CodeMirror} from 'react-codemirror2'
import { readFile, readFileSync } from 'fs';

function Code_Editor(props)
{

	const {
    lang,
    Name,
    value,
    onChange
  } = props
	
	//following function is called everytime whenever there is change in content of editor.
	
	function manage_change(editor, data, value) {
    onChange(value+'                                            \n')
  }
  
  //Following function is use to save content of respective file to the local storage
  function save_data()
  {
  		if(value!='                                            \n')
  		{
  			var file=lang+".txt";
  			require("downloadjs")(value,file);
  		}
  }
  
  //CodeMirror is the editor with few basic properties like mode, line numbers, and the value
//to be displayed.
	return(
		<div style={{width:"33.33%" , height:"50%"}} className="Code">
			<h1 >{Name}</h1>
			
			<button onClick={save_data}>Save</button>
			
			
			
			<CodeMirror 
					  onBeforeChange={manage_change}
					  value={value}
					  options={{
						 mode: lang,
						 lineNumbers:true,
						 theme:"dracula"
						}}				   	
				/>
			
			
		</div>
	);
}
export default Code_Editor;
