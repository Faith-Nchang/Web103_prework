import Home from '../components/Home.jsx';
import "./add.css"
import { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCreator = {
      name,
      url,
      imageURL: imageUrl,
      description
    };
    // Submit the new creator data to the server or API
    console.log('New Creator:', newCreator);

    try {
      const { data, error } = await supabase
        .from('creators')
        .insert(newCreator);
      if (error) {
        throw error;
      }
      console.log('Creator added:', data);
      navigate('/', { state: { showCreators: true } }); // Navigate to home and show creators
    } catch (error) {
      setError('Error adding creator: ' + error.message);
    } finally {
      setName('');
      setUrl('');
      setImageUrl('');
      setDescription('');
      setError(null);
    }
  };


  return (
    <div>

      <Home  setViewCreators={true} />
      {/* Form to add a new creator */}
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


         <button onClick={handleSubmit}>Add Creator</button>

      </div>

    </div>
  );
};

export default AddCreator;
