import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BiSelectMultiple } from 'react-icons/bi';
import { AiOutlineFileDone } from 'react-icons/ai';


const Process = () => {
    return (
        <div className='our-process container'>
            <div className="">
                <div className="section-title">
                    <p>Process</p>
                </div>
                <div className="processes">
                    <div className="process-one process">
                        <AiOutlineFileSearch className='icon'></AiOutlineFileSearch>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus!</p>
                    </div>
                    <div className="process-two process">
                        <BiSelectMultiple className='icon'></BiSelectMultiple>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus!</p>
                    </div>
                    <div className="process-three process">
                        <AiOutlineFileDone className='icon'></AiOutlineFileDone>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, necessitatibus!</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Process;