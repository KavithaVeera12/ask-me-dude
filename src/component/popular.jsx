import { CardHeader,Card, Container,FormControl,Form,Row,Col, ButtonGroup,Button,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
function PopularComponent(){
    return(<div   >
          <div className="l1">
     <h3>Questions</h3>
     <p>A questions is a keyword or label that categorizes your question with other, similar questions. Using <br>
     </br>the right question makes it easier for others to find and answer your question.</p>
     <p style={{color:'blue'}}>Show all tag synonyms</p>
    
     <Row>
          <Col sm={3}>
            <Form.Group>
              <Form.Control type="text" placeholder="filter by question name" />
            </Form.Group>
          </Col>
         < Col sm={2}>
          <ButtonGroup>
          <Button variant="outline-dark"> <Nav.Link  href="/popular"> popular</Nav.Link></Button>
    
       
          <Button variant="outline-dark">  <Nav.Link  href="/name"> Name</Nav.Link></Button>
        
          <Button variant="outline-dark"><Nav.Link  href="/asknew"> New</Nav.Link></Button>
           
          </ButtonGroup>
          </Col>
          
          </Row><br></br>


          <Link to="/article"   style={{ textDecoration: 'none' }}>
          <div className="grid-container">
      <div className="grid-item"><Button variant="dark" size="sm">javascript</Button>
      <p style={{fontSize:"13px"}}>For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags....</p>
      <p  style={{fontSize:"13px"}}>2529991 questions    230 asked today, 1286 this week</p>
      </div>
      <div className="grid-item">


      <Button variant="dark" size="sm">Python</Button>
     <p    style={{fontSize:"13px"}}>Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is</p>
     <p  style={{fontSize:"13px"}}>2529991 questions    230 asked today, 1286 this week</p>
      
      </div>
      <div className="grid-item">
      <Button variant="dark" size="sm">Java</Button>
      <p    style={{fontSize:"13px"}}> Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for lib…</p>
      <p    style={{fontSize:"13px"}}>1918068 questions
148 asked today, 870 this week</p>
      </div>
   
    </div><br></br>
    </Link>

    <Link to="/article"   style={{ textDecoration: 'none' }}>
    <div className="grid-container">
      <div className="grid-item">
      <Button variant="dark" size="sm">C#</Button>
      <p    style={{fontSize:"13px"}}>C# (pronounced "see sharp") is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's Microsoft's .NET ecosystem, </p>
      <p    style={{fontSize:"13px"}}> 1616096 questions
156 asked today, 774 this week</p>
      </div>
      <div className="grid-item">

      <Button variant="dark" size="sm">jquery</Button>
      <p    style={{fontSize:"13px"}}>      jQuery is a JavaScript library. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations, and AJAX interactions by mi…</p>
      <p    style={{fontSize:"13px"}}> 1034790 questions
12 asked today, 71 this wee</p>
      </div>
      <div className="grid-item">
        
      <Button variant="dark" size="sm">php</Button>
      <p    style={{fontSize:"13px"}}>      PHP is an open-source, multi-paradigm, dynamically-typed, and interpreted scripting language designed initially for server-side web development. Use this tag for questions about…</p>
      <p    style={{fontSize:"13px"}}>1464964 questions85 asked today, 431 this week</p>

      </div>
   </div><br></br>
   </Link>

   <Link to="/article"   style={{ textDecoration: 'none' }}>
      
   <div className="grid-container">
      <div className="grid-item"><Button variant="dark" size="sm">html</Button>
      <p style={{fontSize:"13px"}}>  HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal.</p>
      <p  style={{fontSize:"13px"}}> 1187827 questions
102 asked today, 551 this week</p>
      </div>
      <div className="grid-item">


      <Button variant="dark" size="sm">Python</Button>
     <p    style={{fontSize:"13px"}}>Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is</p>
     <p  style={{fontSize:"13px"}}>2529991 questions    230 asked today, 1286 this week</p>
      
      </div>
      <div className="grid-item">
      <Button variant="dark" size="sm">Java</Button>
      <p    style={{fontSize:"13px"}}> Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for lib…</p>
      <p    style={{fontSize:"13px"}}>1918068 questions
148 asked today, 870 this week</p>
      </div>
   
    </div>
    </Link>
   </div>
   
    
    </div>)
}
export default PopularComponent