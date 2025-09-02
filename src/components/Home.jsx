import "./Home.css"
import Button from './Button.jsx'
import { useNavigate } from "react-router-dom";

const Home = ({setViewCreators}) => {

    const navigate = useNavigate();

    const handleViewCreators = () => {
        setViewCreators(true);
        navigate("/");
    };

  return (


   <div className='app'>
        <h1 className='title'>Creator Universe</h1>

        <p>Welcome to the Creator Universe! Here you can view your favorite creators.</p>
        <p>Explore the different creators and their works.</p>

        <div className='button-container'>
          <button type="button" onClick={handleViewCreators} className="view-creators-btn">View Creators</button>
          <Button link="/creators/add">Add Creator</Button>
        </div>
      
      </div>
  )
}

export default Home
