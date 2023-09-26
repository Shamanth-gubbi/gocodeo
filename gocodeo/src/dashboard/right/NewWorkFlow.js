import React from 'react';
import './NewWorkFlow.css';

function NewWorkFlow() {
    return (
        <div className='newworkflow'>
            <span className='ip-header'>New WorkFlow</span>
            <div className='input'>
                
                <div className='top-input'>
                    <input className='ip1' placeholder="Title" type="text"></input>
                    <input className='ip1' placeholder="URL" type="text"></input>
                </div>
            
                <input className='ip2' placeholder="Step one" type="text"></input>
                <input className='ip2' placeholder="Step two" type="text"></input>
                <input className='ip2' placeholder="Step three" type="text"></input>

                <button class="button button1" >Deploy </button>
            </div>
        </div>
    );
}

export default NewWorkFlow;