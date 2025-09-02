import "./creators.css";
import CreatorCard from "./CreatorCard";
const Creators = ({ creators }) => {
  return (
    <div className="">
      <h2>Creators </h2>
      <div className="creator-cards">
        {/* Map through creators and display them */}

        {creators && creators.length > 0 ? (

          creators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))
        ) : (
          <li>No creators found.</li>
        )}


      </div>
    </div>
  )
}

export default Creators