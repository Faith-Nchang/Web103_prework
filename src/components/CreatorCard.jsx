import "./CreatorCard.css";
import { useNavigate } from "react-router-dom";


const CreatorCard = ({id, name, url, description, imageURL}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/creators/${id}`);
  };

  return (
    <div className="creator-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>

      <div className="image">



        {imageURL && <img src={imageURL} alt={`${name}'s avatar`} className="img" />}
        {!imageURL && <div className="placeholder"></div>}
      </div>
       <div className="details">
       <h2> Name:  {name}</h2>
        {description.length > 100 ? (
          <p className="description">{description.slice(0, 100)}...</p>
        ) : (
          <p className="description">{description}</p>
        )
        }
        <div>
          
        </div>
  <a href={url} target="_blank" rel="noopener noreferrer" className="profile">View Profile</a>

        <div className="trash-icon">
          {/* Trash2 icon goes here if you want to keep it */}
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
