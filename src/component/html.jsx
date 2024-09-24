import React, { useState } from 'react';
import { Nav, NavLink, Collapse } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function HtmlComponent() {
    const [open, setOpen] = useState(false);
     return (
        <div >
             

<p onClick={() => setOpen(!open)}><h5>1. What is HTML</h5></p>
     
     <Collapse in={open}>
       <div>
         <p>
           <h6>Answer:</h6> HTML stands for Hyper Text Markup Language HTML is the
           standard markup language for creating Web pages HTML describes the
           structure of a Web page HTML consists of a series of elements HTML
           elements tell the browser how to display the content HTML elements
           label pieces of content such as "this is a heading", "this is a
           paragraph", "this is a link", etc.
         </p>
      
       </div>
      
     </Collapse>

     <p onClick={() => setOpen(!open)}><h5>2. What FullForm of HTML?</h5></p>
    
    <Collapse in={open}>
      <div>
        <p>
          <h6>Answer:</h6> HyperTextMarup Language
        </p>
     
      </div>
     
    </Collapse>

    <p onClick={() => setOpen(!open)}><h5>3. What are HTML tags?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document. As part of an HTML element, HTML tags help web browsers convert HTML.
        </p>
     
      </div>
     </Collapse>

     <p onClick={() => setOpen(!open)}><h5>3. What are HTML tags?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document. As part of an HTML element, HTML tags help web browsers convert HTML.
        </p>
     
      </div>
     </Collapse>
     <p onClick={() => setOpen(!open)}><h5>3. What are HTML tags?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document. As part of an HTML element, HTML tags help web browsers convert HTML.
        </p>
     
      </div>
     </Collapse>
     <p onClick={() => setOpen(!open)}><h5>3. What are HTML tags?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document. As part of an HTML element, HTML tags help web browsers convert HTML.
        </p>
     
      </div>
     </Collapse>
     <p onClick={() => setOpen(!open)}><h5>3. What are HTML tags?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> An HTML tag is a piece of markup language used to indicate the beginning and end of an HTML element in an HTML document. As part of an HTML element, HTML tags help web browsers convert HTML.
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
           
        </div>
        
          
    );
}
export default HtmlComponent