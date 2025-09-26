import { use, useState } from "react";
import { ArrowDown, ArrowUp } from 'lucide-react';
import './Accordion.css';

export function Accordion() {

    let defaultData = [
        {
            'title': 'HTML',
            'para': 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
        },
        {
            'title': 'CSS ',
            'para': 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
        },
        {
            'title': 'Javascript',
            'para': 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
        }
    ]

    let [accordioncontent, setAccordion] = useState(defaultData);
    let [currentoption, setcurrentoption] = useState(0);
    let [isVisible, setIsVisible] = useState(true);

    function handleClick(idx) {
        if (idx == currentoption) {
            setIsVisible(prev => !prev);
        }
        else {
            setIsVisible(true);
            setcurrentoption(idx)
        }
    }
    return (
        <div className="accordion-container">
            {accordioncontent.map((data, idx) => (
                <div>
                    <div onClick={() => handleClick(idx)} className="title-row">
                        <h3>{data.title}</h3>
                        {idx == currentoption && isVisible ? <ArrowDown /> : <ArrowUp />}
                    </div>
                    {/* {isVisible && idx == currentoption && <p>{data.para}</p>} */} {/* no animation */}
                    <div
                        className={`accordion-content ${isVisible && idx === currentoption ? "open" : ""
                            }`}
                    >
                        <p>{data.para}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
