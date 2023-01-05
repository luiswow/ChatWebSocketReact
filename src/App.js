import logo from './logo.svg';
import './App.css';
import {useEffect, useState,useRef} from "react"

function App() {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [flag, setFlag]= useState(false);
  const [val, setVal] = useState(null);
  const ws = useRef(null);console.log(ws)
    const d = new Date();


useEffect(()=>{

  const socket = new WebSocket("ws://ec2-18-224-93-48.us-east-2.compute.amazonaws.com:8080");
socket.addEventListener('message', function (event) {
    console.log(event.data);
});
    ws.current= socket;
    return () => {
      socket.close();
    };

},[])


useEffect(()=>{

 

 
  

},[])
console.log(ws.current)
console.log(val)


// ws.addEventListener("open", () =>{
//   console.log("We are connected");
//   ws.send("How are you?");
// });


const handleChange = (event) => {
  setMessage(event.target.value);
};
const handleChangeUser = (event) => {
  setUser(event.target.value);
};
  return (
//     <div className="App">
//      <h1>web socket </h1>

// <div>
//   <label>Mensaje</label>


// <input      
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={message} />
// </div>
// {
//     user == "" ?
//     <label style={{color: "red"}}>Nombre de usuario es requerido </label>
//     : ""

//   }
//         <div>
//         <label>Nombre de usuario</label>
//         <input      
//         type="text"
//         id="user"
//         name="user"
//         onChange={handleChangeUser}
//         value={user} />
//         </div>

//      <button onClick={()=>{
//       if(user != ""){
//         const aja=    {
//           type: 'NEW_MESSAGE',
//           payload: {
//             message: message,
//             user: user,
//           },
         
          
//         }
//         conn.onopen = () =>      conn.send(
//           JSON.stringify(aja)
          
//        );
//       // conn.send(JSON.stringify(aja))

//       }
        
        


//       }}>enviar mensaje</button>
    //   {

    //      messages.map((data, index)=>{
    //       console.log(data);
    //  return <>
    
    //  <p key={index}>mensaje de  <span style={{color: "red"}}>Usuario:{data.user}</span> :{data.message}</p>
    //  </>
    //      })
  
    //   }
//       <div>
//       {
//         flag? 
//         <div>Cargando mensaje...</div>
//         : ""
//       }
//       <button onClick={()=>setMessages([])}>limpiar chat xd</button>

//       </div>
//     </div>

          
 <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-4">
              <div className="box box-warning direct-chat direct-chat-warning">
                <div className="box-header with-border">
                  <h3 className="box-title">Chat Messages</h3>
                  <div className="box-tools pull-right">
                    <span data-toggle="tooltip" title className="badge bg-yellow" data-original-title="3 New Messages"></span>
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title data-widget="chat-pane-toggle" data-original-title="Contacts">
                      <i className="fa fa-comments" /></button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <div className="direct-chat-messages">
                   
                    {
                      messages.map((data,index)=>{
                        return <>
                        <div className="direct-chat-msg">
<div className="direct-chat-info clearfix">
  <span className="direct-chat-name pull-left"> {data.user} </span>
  <span className="direct-chat-timestamp pull-right">{d.getHours()} hours with { d.getMinutes()} minutes</span>
</div>
<img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
<div className="direct-chat-text">
 {data.message}
</div>
</div>

                        </>
                      })
                      
                      


                    }
            
                    
                    
                    {/* <div className="direct-chat-msg right">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                      </div>
                      <img className="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image" />
                      <div className="direct-chat-text">
                        Thank you for your believe in our supports
                      </div>
                    </div>
                    <div className="direct-chat-msg">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-left">Timona Siera</span>
                        <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                      </div>
                      <img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
                      <div className="direct-chat-text">
                        For what reason would it be advisable for me to think about business content?
                      </div>
                    </div>
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                      </div>
                      <img className="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image" />
                      <div className="direct-chat-text">
                        I would love to.
                      </div>
                    </div> */}
                   
                  </div>
                  {flag
                    ? <span>Enviado mensaje...</span>
                    : ""
                    }
                </div>
                <div className="box-footer">
           
                    <div className="input-group">
                      <input type="text" onChange={handleChange}
                       value={message}  name="message" placeholder="Type Message ..." className="form-control" />
                      <input  type="text" name="user" placeholder="Type user" className="form-control"  onChange={handleChangeUser}
      value={user} />

                      <span className="input-group-btn">
                        <button onClick={()=>{
                                if(user != ""){
                                  setFlag(true)
        const aja=    {
          type: 'NEW_MESSAGE',
          payload: {
            message: message,
            user: user,
          },
         
          
        }
      //   ws.current.onopen = () =>      ws.current.send(
      //     JSON.stringify(aja)
          
      //  );

   
    
      ws.current.send(JSON.stringify(aja))

         ws.current.onmessage = (event) => {
      console.log("got message", event.data);
      setVal(event.data);
    };

      
      }
        
        


      }
                        } type="button" className="btn btn-warning btn-flat">Send</button>
                      </span>
                    </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
