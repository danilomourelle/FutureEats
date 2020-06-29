import React from 'react'
import "./ScrollMenu.css"


export default function FilterScroll(props) {

    return (
        <nav class="navBar">
            <div class="container">
                <ul class="nav">
                    <li value="1" onClick={() => props.handleClick("Hamburguer")}>Burger</li>
                    <li value="2" onClick={() => props.handleClick("Árabe")}>Árabe</li>
                    <li value="3" onClick={() => props.handleClick("Asiática")}>Asiática</li>
                    <li value="4" onClick={() => props.handleClick("Mexicana")}>Mexicana</li>
                    <li value="5" onClick={() => props.handleClick("Baiana")}>Baiana</li>
                    <li value="6" onClick={() => props.handleClick("Carnes")}>Carnes</li>
                    <li value="7" onClick={() => props.handleClick("Italiana")}>Massas</li>                    
                    <li value="8" onClick={() => props.handleClick("Sorvetes")}>Sorvetes</li>
                    <li value="9" onClick={() => props.handleClick("Petiscos")}>Petiscos</li>
                </ul>
            </div>
        </nav>
    )
}