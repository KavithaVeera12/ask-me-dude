import React, { useState } from 'react';
import {  Collapse } from 'react-bootstrap';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ReactjsComponent(){
    const [open, setOpen] = useState(false);
    return(<div>
        <p onClick={() => setOpen(!open)}><h5>1. What is React js?</h5></p>

     
<Collapse in={open}>
  <div>
    <p>
   <h6>  Answer:</h6>ReactJS, also known as React, is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library. It was developed by Facebook and is widely used for creating dynamic and interactive web applications. In this article, we’ll explore the key concepts of React.
    </p>
 
  </div>
 
</Collapse>

<p onClick={() => setOpen(!open)}><h5>2.Why we use react?</h5></p>

<Collapse in={open}>
 <div>
   <p>
   <h6> Answer:</h6> Being a part of the JavaScript language, using React spawns many advantages. Products built with React are simple to scale, a single language used on the server/client/mobile side of things grants outstanding productivity, there are workflow patterns for convenient teamwork, UI code is readable and maintainable, and more. World-leading companies have used React and other JS technologies in some of the top market-defining products
   </p>

 </div>

</Collapse>

<p onClick={() => setOpen(!open)}><h5>3.What is usestate in react</h5></p>

<Collapse in={open}>
 
  
 <div>
   <p>
   <h6>  Answer:</h6> useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
   </p>

 </div>

</Collapse>
<p onClick={() => setOpen(!open)}><h5>4.What is props?</h5></p>

<Collapse in={open}>
 
  
 <div>
   <p>
    <h6> Answer:</h6> Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.

   </p>

 </div>

</Collapse>



<div  className="v1">

<CKEditor 
                editor={ ClassicEditor }
                data="<p>Hello from  Askmedude?</p>"
                onReady={ editor => {
                 
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event ) => {
                    console.log( event );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
</div >
       
    </div>)
}
export default ReactjsComponent