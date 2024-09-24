import React, { useState } from 'react';
import { Nav, NavLink, Collapse } from 'react-bootstrap';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function JavaComponent(){
    const [open, setOpen] = useState(false);
    return(<div>
      
      <p onClick={() => setOpen(!open)}><h5>1. What is Java?</h5></p>

     
     <Collapse in={open}>
       <div>
         <p>
        <h6>  Answer:</h6>Developed by Sun Microsystems in 1995, Java is a highly popular, object-oriented programming language. This platform independent programming language is utilized for Android development, web development, artificial intelligence, cloud applications, and much more.

In this tutorial, we will cover everything from the basics of Java syntax to advanced topics like object-oriented programming and exception handling. So, by the end of this tutorial, you will have a strong understanding of Java and be ready to start writing your own Java applications. So let’s get started on this comprehensive Java programming tutorial!
         </p>
      
       </div>
      
     </Collapse>

     <p onClick={() => setOpen(!open)}><h5>2.Why we use java?</h5></p>
    
    <Collapse in={open}>
      <div>
        <p>
        <h6> Answer:</h6> Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
                          It is one of the most popular programming languages in the world
                          It has a large demand in the current job market
                          It is easy to learn and simple to use
                          It is open-source and free
                         It is secure, fast and powerful
                         It has huge community support (tens of millions of developers)
                         Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
        </p>
     
      </div>
     
    </Collapse>

    <p onClick={() => setOpen(!open)}><h5>3.What's the difference between JavaScript and Java?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> Java is an OOP programming language, and it helps to create applications that function in a virtual machine or browser, while JavaScript is an OOP scripting language. Also, the JavaScript code runs on a browser only.
        </p>
     
      </div>
     
    </Collapse>
    <p onClick={() => setOpen(!open)}><h5>4.What are the various data types in java?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
         <h6> Answer:</h6> Data Types in Java
Data types in Java are of different sizes and values that can be stored in the variable that is made as per convenience and circumstances to cover up all test cases. Java has two categories in which data types are segregated 

Primitive Data Type: such as boolean, char, int, short, byte, long, float, and double
Non-Primitive Data Type or Object Data type: such as String, Array, etc.
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
export default JavaComponent