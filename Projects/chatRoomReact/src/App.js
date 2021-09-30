import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './App.css';

fireabase.initializeApp({
  apiKey: "AIzaSyAe-7uubNezkH5Zw_b2qdQemAjJ3z5o5DA",
  authDomain: "cisc275chatroom.firebaseapp.com",
  databaseURL: "https://cisc275chatroom-default-rtdb.firebaseio.com",
  projectId: "cisc275chatroom",
  storageBucket: "cisc275chatroom.appspot.com",
  messagingSenderId: "1019765562309",
  appId: "1:1019765562309:web:a9a937268e9b48972e49ac",
  measurementId: "G-D3N129118Y"
})
const auth = fireabse.auth();
const firestore = firebase.firestore();

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick ={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom(){
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query);
  const [formValue, setFormValue] = useState('');
  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL} = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue('');
  }
  return(
    <><div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
    <form>
      <input value={formValue} onchange={(e) => setFormValue(e.tartet.value)}/>
       <button type = "submit">Submit</button> 
    </form></>
    
  )
}
function ChatMessage(props){
  const{text, uid} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={'message ${messageClass}'}>
      <img src={photoURL}/>
    <p>{text}</p>
    </div>
  )
}
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />} 
      </section>
    </div>
  );
}

export default App;
