
import { useState, useEffect } from "react";
import { supabase } from "../client.js";
import { useParams, useNavigate } from "react-router-dom";
import Home from "../components/Home.jsx";

const EditCreator = () => {

  const { id } = useParams();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  // Fetch the creator's current details
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
        setName(data.name);
        setImageUrl(data.imageURL);
        setUrl(data.url);
        setDescription(data.description);
      }
    };

    fetchCreator();
  }, [id]);



  // edit the creator
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from("creators")
        .update({
          name,
          imageURL: imageUrl,
          url,
          description,
        })
        .eq("id", id);

      if (error) {
        console.error("Error updating creator:", error);
      } else {
        // Redirect or show success message
        alert("Creator updated successfully!");
  navigate("/", { state: { showCreators: true } });

      }
    } catch (error) {
      console.error("Error updating creator:", error);
    } finally {
      // Reset form fields or show a success message
      setName("");
      setImageUrl("");
      setUrl("");
      setDescription("");
  };


    if (error) {
      console.error("Error updating creator:", error);
    } else {
      // Redirect or show success message
    }
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

  return (
    <div>
      {/* Form to edit an existing creator */}
      <Home  setViewCreators={true} />
      <div className="container">
        <h2>Add a New Creator</h2>

        <h2>Name</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
        />

        <h2>Image url</h2>
        <p>include a link to the creator's image. Be sure to include the http://</p>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          
        />

        <h2>Page URL</h2>
        <p>include a link to the creator's main page. Be sure to include the http://</p>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <h2>Description</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <div >

        </div>
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={handleSubmit}>Edit Creator</button>
          <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
        </div>  
      </div>

    </div>
  );
};

export default EditCreator;
