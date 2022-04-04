import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-section'>
            <div className='blog'>
                <h4>What is context API?</h4>
                <p>Ans: Context API creates a path to share value within components and trees. It makes props drilling easier. It assists in solving props drilling and enables exchanging unique details. By it props can be drilled in all levels of application. By using it we need not to pass props through intermediate elements.
                </p>
            </div>
            <div className='blog'>
                <h4>What is semantic tag?</h4>
                <p>Ans: It clearly describes tag meaning to both browser and developer. It provides informations about how it will be shown at browser interface. It has meaningful name which tells about type of content. It makes easier to understand coding for developers. It offers a better user experience.
                </p>
            </div>
        </div>
    );
};

export default Blogs;