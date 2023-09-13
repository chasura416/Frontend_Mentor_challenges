import * as St from "../components/menu";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <St.Menu>
      <St.MenuItem onClick={()=> {navigate("/")}}>home</St.MenuItem>
      <St.MenuItem onClick={()=> {navigate("/main")}}>main</St.MenuItem>
      <St.MenuItem onClick={()=> {navigate("/main2")}}>main2</St.MenuItem>
    </St.Menu>
  )
}

export default Home;