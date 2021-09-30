const username = prompt("Enter Name:");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
//import * as fb from  "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAe-7uubNezkH5Zw_b2qdQemAjJ3z5o5DA",
    authDomain: "cisc275chatroom.firebaseapp.com",
    databaseURL: "https://cisc275chatroom-default-rtdb.firebaseio.com",
    projectId: "cisc275chatroom",
    storageBucket: "cisc275chatroom.appspot.com",
    messagingSenderId: "1019765562309",
    appId: "1:1019765562309:web:a9a937268e9b48972e49ac",
    measurementId: "G-D3N129118Y"
  };
  
  // Initialize Firebase
  const database = initializeApp(firebaseConfig);


  
  document.getElementById("submitButton").addEventListener("submit", sendMessage);

  function sendMessage(e) {
    e.preventDefault();

    const timestamp = Date.now();
    const messageInput = document.getElementById("textBox");
    const message = messageInput.value;
  
    messageInput.value = "";
  
    document
      .getElementById("chatBox")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    // create db collection and send in the data
    database.ref("messages/" + timestamp).set({
      username,
      message,
    });
  }

  const fetchChat = database.ref("messages/");

  fetchChat.on("child_added", function (snapshot){
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("chatBox").innerHTML += message;
  });