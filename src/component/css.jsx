import React, { useState } from 'react';
import { Nav, NavLink, Collapse } from 'react-bootstrap';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CssComponent(){
    const [open, setOpen] = useState(false);
    return(<div>
        <p onClick={() => setOpen(!open)}><h5>1. What is CSS</h5></p>
     
     <Collapse in={open}>
       <div>
         <p>
           <h6>Answer:</h6>CSS stands for Cascading Style Sheets
                         CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                         CSS saves a lot of work. It can control the layout of multiple web pages all at once
                         External stylesheets are stored in CSS files
         </p>
      
       </div>
      
     </Collapse>

     <p onClick={() => setOpen(!open)}><h5>2. What FullForm of CSS?</h5></p>
    
    <Collapse in={open}>
      <div>
        <p>
          <h6>Answer:</h6> CSS stands for Cascading Style Sheets
          
        </p>
     
      </div>
     
    </Collapse>

    <p onClick={() => setOpen(!open)}><h5>3.How many ways we can represent css?</h5></p>
    
    <Collapse in={open}>
      
       
      <div>
        <p>
        <h6>  Answer:</h6> 1.Inline CSS - Inline CSS is the CSS code that is written inside the HTML tag.
                           2.Internal CSS - Internal CSS is the CSS code that is written inside the HTML file in the style tag.
                            3.External CSS - External CSS is written in a separate CSS file and is included in the HTML file using the link tag.
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
export default CssComponent