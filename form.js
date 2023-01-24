import { useState } from 'react';

export default function Form() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return ( <
            div className = "success"
            style = {
                {
                    display: submitted ? '' : 'none',
                }
            } >

            <
            h1 > User { name }
            successfully registered!! < /h1>  < /
            div >
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return ( <
            div className = "error"
            style = {
                {
                    display: error ? '' : 'none',
                }
            } >

            <
            h3 > Please enter all the fields < /h3>  < /
            div >
        );
    };

    return ( <
        div className = "form" >

        <
        div >
        <
        h1 > Eden < /h1>   <
        li id = "one" > 1 < /li> <
        li id = "two" > 2 < /li> <
        li id = "three" > 3 < /li> <
        li id = "four" > 4 < /li>  <
        h1 > Welcome!First things first... < /h1>  <
        p > You can always change them later < /p> < /
        div >

        { /* Calling to the methods */ } <
        div className = "messages" > { errorMessage() } { successMessage() } <
        /div>

        <
        form > { /* Labels and inputs for form data */ } <
        label className = "label" > Full Name < /label>  <
        input onChange = { handleName }
        className = "input"
        value = { name }
        type = "text" / >

        {
            /* <label className = "label" >Display Name </label> 
                    <input onChange = { handleName }
                    className = "input"
                    value = { name }
                    type = "text" /> */
        }

        <
        label className = "label" > Display name < /label>  <
        input onChange = { handleEmail }
        className = "input"
        value = { email }
        type = "email" / >



        <
        button onClick = { handleSubmit }
        className = "btn"
        type = "submit" >
        Create workspace <
        /button>  < /
        form > <
        /div>
    );
}