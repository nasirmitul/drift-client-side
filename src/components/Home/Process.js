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
                        <p>Search the cars from your preferred categories</p>
                    </div>
                    <div className="process-two process">
                        <BiSelectMultiple className='icon'></BiSelectMultiple>
                        <p>Select the car that fits to you</p>
                    </div>
                    <div className="process-three process">
                        <AiOutlineFileDone className='icon'></AiOutlineFileDone>
                        <p>Purchase the car you have liked</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Process;