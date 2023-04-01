import React from 'react';
import './Qa.css'

const Qa = () => {
    return (
        <div className='qa'>
            <div>
            <h3 className="question"> 1. Differences between props and state</h3>
            <p>React gives difference terms to use in building components. In general "state" means situation. It is used to track changes in web Application. The change may be done by user interaction or data integration. React tracks the state and when something is changed react then compare virtual DOM with real DOM and then changes UI of Application as per changes. <br />
            Props is a short form of properties. In JavaScript everything is object and React is a JavaScript Library. Props is used to send data from parent components to child components. This data sending is unidirectional that means one way data sending system. Props can be used to send an array or object or function to communicate with child components by parents components</p>
            </div>
            <div>
                <h3 className="question"> 2. How does useState work?</h3>
                <p>useState is a react hook. This hook is used to track the state of variables. useState hook takes an initial value as parameter and when the state is changed then it returns a function to change the state of variable. So that react application can run in dynamic way.</p>
            </div>
            <div>
                <h3 className="question"> 3. What does useEffect do except data loading?</h3>
                <p>useEffect is a hook to track effect from outside. useEffect recieves an arrow function and an array as dependency. Arrow function performs certain tasks depending on the dependency data.useEffect performs very efficently in case of component reloading without reloading the total website so that user experience could be better. A sets of tasks can be performed on a single part of component by setting as a dependency of useEffect hook. </p>
            </div>
            <div>
                <h3 className="question"> 4. How does React work?</h3>
                <p>React is a JavaScript library. React create as much reuseable components as needed to form a full UI based Application. Components work like a function of JavaScript and can recieve parameters as props. React creates a virtual copy of real DOM which is called virtual DOM. While some changes is happend React compare real DOM with virtual DOM then changes in a specific part on a component so the application loading time is low and User Experience is better. It also provides developers a good opportunity to manipulate data as per needed by creating components that means small pieces of code.</p>
            </div>
        </div>
    );
};
import './Qa.css'

export default Qa;