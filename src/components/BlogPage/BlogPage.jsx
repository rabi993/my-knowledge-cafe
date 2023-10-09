import React from 'react';

const BlogPage = () => {
    return (
        <>
<div className='px-10'>
            <h1 className='font-bold'>Q1. Props vs state</h1>
            <p>#Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.
            </p>
            <p>
            #Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function.

            </p>
            <p>
            #Props are passed down from the parent component and are read-only within the child component, while state is only accessible within the component where it is defined.

            </p>
            <p>
            #Props can be used to customize the behavior or appearance of a component, while state is used to keep track of information that can change over time.
            </p>
        </div><div className='px-10'>
            <h1 className='font-bold'>Q2. How does useState work?</h1>
            <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. <br /> It can be used like this: <br />

const [state, setState] = useState(initialValue);
            </p>
            
        </div>
        
        </>
    );
};

export default BlogPage;