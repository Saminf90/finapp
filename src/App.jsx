import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const App = () =>{ 
    const [user, setUser] = useState(null);

    useFeffect(() => {
        const getUser =  () => {
        fetch("http://localhost:5000/auth/login/success",{
            method: "GET",
            credentials: "include",
            headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Access-Control-Allow-Credentials": true,
           },   
        }).then((response) => {
            if(response.status === 200) return response.json();
            throw new Error("failed to authenticate user")
        }).then(resObject=> { 
            setUser(resObject.user)
        }).catch((error) => { 
            console.log(error);
        })
     }; 
        getUser(); 
    }, []);

      console.log(user)  

    return 
    <BrowserRouter>
    <div>
        <Navbar user={user} />
        <Routes>
            <Route path="/" elements={<Home />} /> 
            <Route path="/login" elements={user ? <Navigate to="/"/> : <Login />} 
            />
            <Route path="/post/:id" elements={user ? <Post/> : <Navigate to="/login"/>} 
            />
        </Routes>   
    </div>
    </BrowserRouter>
};

export default App;