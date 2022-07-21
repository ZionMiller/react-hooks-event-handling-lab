// Code Keypad Component Here
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.

function Keypad (){
    return (
        <div>
            <input type="password" onChange={() => console.log('Entering password...')}/>
        </div>
    )
}

export default Keypad;