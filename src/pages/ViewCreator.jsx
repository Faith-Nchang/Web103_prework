import { useParams, useNavigate } from "react-router-dom";
import "./creator.css"
import { Pencil, Trash2 } from "lucide-react";



import {useState, useEffect} from 'react';
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  const navigate = useNavigate();

  const handleEdit = () => {
    // Handle edit functionality
    navigate(`/creators/edit/${id}`);
  };


  // handle delete
  const handleDelete = async () => {
    const res = window.confirm("Are you sure you want to delete this creator?");
    if (res) {
      try {
        const { error } = await supabase
          .from("creators")
          .delete()
          .eq("id", id);
        if (error) {
          console.error("Error deleting creator:", error);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error deleting creator:", error);
      }
    }
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  return (
    <div className="container">

      <h1>View Creator</h1>
      {creator ? (
        <div className="creator-details">
          <div>
            <img src={creator.imageURL} alt={`${creator.name}'s avatar`} />
          </div>
          <div className="details"> 
            <h2>{creator.name}</h2>
            <p>{creator.description}</p>
            <div className="button-group">
              <a href={creator.url} target="_blank" rel="noopener noreferrer" className="button">
                View Profile
              </a>
              <div>
                <Pencil color="#f0a400" onClick={handleEdit} />
                <Trash2 color="#f00000" onClick={handleDelete} />
              </div>

            </div>
          </div>
        </div>
      ) : (
        <p>Loading creator details...</p>
      )}
    </div>
  );
};

export default ViewCreator;
