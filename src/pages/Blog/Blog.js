import React from 'react';

const Blog = () => {
    return (
        <div className='p-3 md:p-5 w-full md:w-3/4 mx-auto my-7 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <h1 className='text-2xl font-semibold'>What are the different ways to manage a state in a React application?</h1>
                <p className='border-l-4 border-yellow-500 italic pl-2'>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>How does prototypical inheritance work?</h1>
                <p className='border-l-4 border-yellow-500 italic pl-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>What is a unit test? Why should we write unit tests?</h1>
                <p className='border-l-4 border-yellow-500 italic pl-2'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>React vs. Angular vs. Vue?</h1>
                <p className='border-l-4 border-yellow-500 italic pl-2'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;