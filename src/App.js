import "./App.css";
import useInput from "./useInput";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

function App() {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const handleCreate = async (e)=>{
    e.preventDefault();
    try{
      const user = await createUserWithEmailAndPassword(auth,email,password);
      console.log(user.user.email);
    }catch(err){
      console.log(err);
    }
    
  }
  const handleLogin= async (e)=>{
    e.preventDefault();
    try{
      const user = await signInWithEmailAndPassword(auth,email,password)
      console.log(user.user.email);
    }catch(err){
      console.log(err);
    }
    
  }
  // onAuthStateChanged(auth,(currentUser)=>{
  //   console.log(currentUser);
  // })
  return (
    <div className="app">
      <form id="signup" onSubmit={handleCreate}>
        <h2>Signup</h2>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password </label>
        <input
          name="password"
          type="password"
          required
          placeholder="Enter your password..."
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Signup</button>
      </form>
      <form id="signin" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email..."
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password </label>
        <input
          name="password"
          type="password"
          required
          placeholder="Enter your password..."
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
