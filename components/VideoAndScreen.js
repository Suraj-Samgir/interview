"use client"
import { useEffect, useRef, useState } from "react";
import { Peer } from "peerjs";
import Questions from "./Questions";
import CodeEditorComponent from './CodeEditorComponent';

export default function VideoAndScreen() {
  const [myPeerID, setMyPeerID] = useState(null);
  const [myPeer, setMyPeer] = useState(null);
  const [receiverID, setReceiverID] = useState("");
  const myVideo = useRef(null);
  const friendVideo = useRef(null);

  // for video call
  const [myPeer2, setMyPeer2] = useState(new Peer());
  const myScreen = useRef(null);
  const [screenID, setScreenID] = useState("");

  useEffect(() => {
    const peer = new Peer();

    setMyPeer(peer);

    peer.on("open", function (id) {
      setMyPeerID(id);
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        myVideo.current.srcObject = stream;
        myVideo.current.play();
      })
      .catch(function (error) {
        console.error("Error accessing the camera and microphone:", error);
      });

    // navigator.mediaDevices
    //   .getDisplayMedia({ video: true })
    //   .then((screen) => {
    //     myScreen.current.srcObject = screen;
    //     myScreen.current.play();
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });

    peer.on("call", function (call) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(
        function (stream) {
          call.answer(stream);
          call.on("stream", function (remoteStream) {
            friendVideo.current.srcObject = remoteStream;
            friendVideo.current.play();
          });
        },
        function (err) {
          console.log("Failed to get local stream", err);
        }
      );
    });
    myPeer2.on("call", function (call) {
      call.answer(null);
      call.on("stream", function (remoteStream) {
        myScreen.current.srcObject = remoteStream;
        myScreen.current.play();
      });
    });
  }, []);
  console.log("peerID", myPeerID);
  console.log("screenID", myPeer2.id);


  function callTheReceiver() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        let call = myPeer.call(receiverID, stream);
        call.on("stream", function (remoteStream) {
          friendVideo.current.srcObject = remoteStream;
          friendVideo.current.play();
        });
      });
  }
  function shareScreen() {
    navigator.mediaDevices
      .getDisplayMedia({ video: true, audio: true })
      .then(function (stream) {
        let ss = myPeer2.call(screenID, stream);
        ss.on("stream", function (remoteStream) {
          myScreen.current.srcObject = remoteStream;
          myScreen.current.play();
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div style={{height:"100%"}}>
    <div style={{ display: "flex", gap: "2rem", height:"100%"}}>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap : "1rem",
        margin:"1rem",
      }}>
        <main style={{ display: "flex", flexDirection: "column", position : "relative",  }}>



          <small style={{position:"absolute", color : "white" , fontWeight:"700", margin:"0.5rem"}}>My Video</small>
          <video
            style={{ width: "300px", height: "300px", border: "1px solid", backgroundColor: "grey", borderRadius:"5px" }}
            ref={myVideo}
          ></video>
        </main>

        

        <main style={{ display: "flex", flexDirection: "column" , position : "relative",}}>
        <small style={{position:"absolute", color : "white" , fontWeight:"700", margin:"0.5rem"}}>Friend Video</small>
          <video
            style={{ width: "300px", height: "300px", border: "1px solid", backgroundColor: "grey", borderRadius:"5px" }}
            ref={friendVideo}
          ></video>
        </main>

        <div style={{display: "flex", justifyContent:"space-between",alignItems:"center" , width:"100%"}}>
        <input
          type="text"
          placeholder="Enter Receiver Peer ID"
          value={receiverID}
          onChange={(e) => setReceiverID(e.target.value)}
          style={{width:"70%", backgroundColor:"white", outline: "none", padding:"0.5rem", borderRadius:"5px", fontSize:"12px", color:"black"}}
        />
        <button onClick={callTheReceiver} style={{width:"25%",padding:"0.5rem", fontSize:"15px", fontWeight:"600",backgroundColor:"teal", border:"none", outline:"none", borderRadius:"5px"}}>Call</button>
        </div>
        <div style={{display: "flex", justifyContent:"space-between",alignItems:"center" , width:"100%"}}>
        <input
          type="text"
          placeholder="Enter Receiver Screen ID"
          onChange={(e) => setScreenID(e.target.value)}
          style={{width:"70%", backgroundColor:"white", outline: "none", padding:"0.5rem", borderRadius:"5px", fontSize:"12px", color:"black"}}
        />
        <button onClick={shareScreen} style={{width:"25%",padding:"0.5rem", fontSize:"15px", fontWeight:"600",backgroundColor:"teal", border:"none", outline:"none", borderRadius:"5px"}}>Share</button>
        </div> 

      </div>

      <div style={{display:"flex", width:"100%" }} className="p-2 gap-2">
      <div className="CodeEditor" style={{width:"100%"}} >
        <CodeEditorComponent />
      </div> 
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Questions/>
        <main style={{ display: "flex", flexDirection: "column", position : "relative", marginTop:"1rem"}}>
          
          <small style={{position:"absolute", color : "white" , fontWeight:"700", margin:"0.5rem"}}>Screen</small>
          <video
            style={{ width: "80vw", height: "40vh", border: "1px solid", backgroundColor: "grey", borderRadius:"5px"  }}
            ref={myScreen}
          ></video>

        </main>
        
        
      </div>
      </div>
    </div>
    
    </div>
  );
}
