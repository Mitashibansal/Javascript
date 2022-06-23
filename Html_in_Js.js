console.log('mitashi'); 
const name = '"Hello, world!"';
let myHtml = `<style>
            .element
            { font-size: 2em; color: #ffffff}
            body {
                background-color:#8a2be2;
            }
            img{
                display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 75%;
                    height:500px ;
                    border: 5px solid black ;
            }
            h1{
                font-size: 3em; 
            }
            </style>
            <body>
            <h1><center>${name}</h1>
            <p> A ${name} program is generally a computer program that outputs or displays the message "Hello, world!". This program is very simple to write in many programming languages, and is often used to illustrate a language's basic syntax.</p>
            <img src="setup.jpeg">
            <p> </p>
            <div class="element"><center>Here this program is meant to illustrate Hello World in Java Script</div>
            </body>
            `;
document.body.innerHTML = myHtml;

