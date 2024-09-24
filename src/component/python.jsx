import React, { useState } from 'react';
import { Nav, NavLink, Collapse } from 'react-bootstrap';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function PythonComponent(){
    const [open, setOpen] = useState(false);
    return(<div >
   
   <p onClick={() => setOpen(!open)}><h5>1. What is python ?</h5></p>

     
<Collapse in={open}>
  <div>
    <p>
   <h6>  Answer:</h6>Python is a programming language that is interpreted, object-oriented, and considered to be high-level too. What is Python? Python is one of the easiest yet most useful programming languages which is widely used in the software industry. People use Python for Competitive Programming, Web Development, and creating software. Due to its easiest syntax, it is recommended for beginners who are new to the software engineering field. Its demand is growing at a very rapid pace due to its vast use cases in Modern Technological fields like Data Science, Machine learning, and Automation Tasks. For many years now, it has been ranked among the top Programming languages.
    </p>
 
  </div>
 
</Collapse>

<p onClick={() => setOpen(!open)}><h5>2.What are the benefits of using Python language as a tool in the present scenario?</h5></p>

<Collapse in={open}>
 <div>
   <p>
   <h6> Answer:</h6> Object-Oriented Language
High-Level Language
Dynamically Typed language
Extensive support Libraries
Presence of third-party modules
Open source and community development
Portable and Interactive
Portable across Operating systems
   </p>

 </div>

</Collapse>

<p onClick={() => setOpen(!open)}><h5>3. Is Python a compiled language or an interpreted language?</h5></p>

<Collapse in={open}>
 
  
 <div>
   <p>
   <h6>  Answer:</h6> Actually, Python is a partially compiled language and partially interpreted language. The compilation part is done first when we execute our code and this will generate byte code internally this byte code gets converted by the Python virtual machine(p.v.m) according to the underlying platform(machine+operating system).
   </p>

 </div>

</Collapse>
<p onClick={() => setOpen(!open)}><h5>4.What is the difference between a Mutable datatype and an Immutable data type?</h5></p>

<Collapse in={open}>
 
  
 <div>
   <p>
    <h6> Answer:</h6> Mutable data types can be edited i.e., they can change at runtime. Eg – List, Dictionary, etc.
Immutable data types can not be edited i.e., they can not change at runtime. Eg – String, Tuple, etc.

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
export default PythonComponent