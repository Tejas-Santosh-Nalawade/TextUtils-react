import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text )
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","sucess");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text )
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","sucess");
        }
    
    const handleClearClick = ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared","sucess");
    } 
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
        
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Cliboard","sucess");
        props.showAlert("Coppied to Clipboard!","sucess");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","sucess");

    }


    const [text, setText] = useState('');

    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light',color: props.mode==='dark'?'white':'#042743'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p> 
            <p>{0.008* text.split(" ").length }Minutes read</p> 
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )   

}