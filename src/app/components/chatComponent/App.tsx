import "./App.css";
import { useEffect, useState, useRef } from "react";
import {
  createChatUserComponent,
  createChatGuestComponent,
} from "./chatContainers/chatContainers";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  const ws: any = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("wss://glacial-stream-10615.herokuapp.com");

    ws.current = socket;
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    ws.current.onmessage = (event: any) => {
      console.log(event);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleSendMessage = () => {
    if (user !== "") {
      const dataToBackend = {
        type: "NEW_MESSAGE",
        payload: {
          message: message,
          user: user,
        },
      };

      // send message to backend socket works in production

      ws.current.onopen = () => ws.current.send(JSON.stringify(dataToBackend));
      // send message to backend socket works in local
      ws.current.send(JSON.stringify(dataToBackend));

      let containerChatReference: any = document.getElementById("referencia");

      //creating chatUser component

      const chatUserHtml = createChatUserComponent(user, message);

      containerChatReference.appendChild(chatUserHtml);

      //recieving message from backend

      ws.current.onmessage = (event: any) => {
        const dataFromGuest = JSON.parse(event.data);

        const chatGuestHtml = createChatGuestComponent(dataFromGuest.payload);

        containerChatReference.appendChild(chatGuestHtml);
      };
    }
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-4">
            <div className="box box-warning direct-chat direct-chat-warning">
              <div className="box-header with-border">
                <h3 className="box-title">Chat Messages</h3>
                <div className="box-tools pull-right">
                  <span
                    data-toggle="tooltip"
                    className="badge bg-yellow"
                    data-original-title="3 New Messages"
                  ></span>
                  <button
                    type="button"
                    className="btn btn-box-tool"
                    data-widget="collapse"
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-box-tool"
                    data-toggle="tooltip"
                    data-widget="chat-pane-toggle"
                    data-original-title="Contacts"
                  >
                    <i className="fa fa-comments" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-box-tool"
                    data-widget="remove"
                  >
                    <i className="fa fa-times" />
                  </button>
                </div>
              </div>
              <div className="box-body">
                <div id="referencia" className="direct-chat-messages"></div>
              </div>
              <div className="box-footer">
                <div className="input-group">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={message}
                    name="message"
                    placeholder="Type Message ..."
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="user"
                    placeholder="Type user"
                    className="form-control"
                    onChange={handleChangeUser}
                    value={user}
                  />

                  <span className="input-group-btn">
                    <button
                      onClick={() => handleSendMessage}
                      type="button"
                      className="btn btn-warning btn-flat"
                    >
                      Send
                    </button>
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
