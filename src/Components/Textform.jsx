import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState('Your text goes here.')

    const updateText = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">
                <h3 className="my-3">Enter your text!</h3>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" cols="7" value={text} onChange={updateText} style={{ resize: "none" }}></textarea>
                </div>
                <button type="button" className="btn btn-primary mr-3" onClick={() => {
                    setText(text.toUpperCase())
                }}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={() => {
                    let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    setText(newText)
                }}>Lowercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={() => {
                    setText('')
                }}>Clear</button>
                <button type="button" className="btn btn-primary mx-3" onClick={() => {
                    navigator.clipboard.writeText(text)
                }}>Copy to Clipboard!</button>

            </div>

            <div className="container my-3">
                <h3 className="py-3">Summary:</h3>
                <p>Words: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} </p>
                <p>Characters: {text.length} </p>
            </div>
        </>
    )
}
