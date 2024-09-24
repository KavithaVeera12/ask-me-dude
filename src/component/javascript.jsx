import React, { useState } from 'react';
import { Nav, NavLink, Collapse } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function JavascriptComponent(){
    const [open, setOpen] = useState(false);

    return(<div>
          <p onClick={() => setOpen(!open)}><h5>1. What is Javascript?</h5></p>
     
     <Collapse in={open}>
       <div>
         <p>
        <h6>  Answer:</h6>JavaScript is the Programming Language for the Web.
                  JavaScript can update and change both HTML and CSS.
                  JavaScript can calculate, manipulate and validate data.
         </p>
      
       </div>
      
     </Collapse>

     <p onClick={() => setOpen(!open)}><h5>2.Why we use Javascript and what is the use of it?</h5></p>
    
    <Collapse in={open}>
      <div>
        <p>
        <h6> Answer:</h6> JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.
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
    <p onClick={() => setOpen(!open)}><h5>4.What are the various data types that exist in JavaScript?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
         <h6> Answer:</h6> Their are two types of Datatype
          1.Primitive Datatype.
          2.Non-Primitive Datatype (or) Reference Datatype
          Primitive Dataype JavaScript has 8 Datatypes
                  String.
                  Number.
                  Bigint.
                  Boolean.
                  Undefined.
                  Null.
                  Symbol.
                  Object.
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
export default JavascriptComponent