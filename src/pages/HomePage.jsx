import { useState } from "react";
import "./HomePage.css";

// Mock Photos Data
const photosData = [
  {
    id: 1,
    name: "Bougainvillea",
    tags: ["Outdoor", "Tropical"],
    image: "/src/assets/Bougainvillea.JPG",
    likes: 12,
    comments: [
      { id: 1, text: "Beautiful plant!" },
      { id: 2, text: "Where can I get one?" },
    ],
  },
  {
    id: 2,
    name: "Buransh",
    tags: ["Outdoor", "WoodyPlant", "uttrakhandn"],
    image: "/src/assets/Buransh.JPG",
    likes: 8,
    comments: [{ id: 1, text: "The State tree of Uttrakhand!" }],
  },
  {
    id: 3,
    name: "Monstera",
    tags: ["Indoor", "Tropical"],
    image: "/src/assets/Monstera.jpeg",
    likes: 8,
    comments: [],
  },
  {
    id: 4,
    name: "Catharanthus pink-roseus",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Catharanthus pink-rosus.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 5,
    name: "Chrysanthemum",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Chrysanthemum.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 6,
    name: "Catharanthus white rosus",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Catharanthus white rosus.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 7,
    name: "Creested Cock's-comb",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Creested Cock's-comb.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 8,
    name: "Dianthus",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Dianthus.jpg",
    likes: 8,
    comments: [],
  },
  {
    id: 9,
    name: "Wall iris",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Wall iris.JPG",
    likes: 8,
    comments: [],
  },
  {
    id: 10,
    name: "Pink Rose",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Pink Rose.JPG",
    likes: 8,
    comments: [],
  },
  {
    id: 11,
    name: "Glandularia pulchella",
    tags: ["Outdoor", "Bright Light"],
    image: "/src/assets/Glandularia pulchella.JPG",
    likes: 8,
    comments: [],
  },
  {
    id: 12,
    name: "Sunflower",
    tags: ["Outdoor", "Summer"],
    image: "/src/assets/Sunflower.JPG",
    likes: 8,
    comments: [],
  },
  {
    id: 13,
    name: "Pink Rose",
    tags: ["Outdoor", "Love"],
    image: "/src/assets/Pink-Rose.JPG",
    likes: 18,
    comments: [],
  },
  {
    id: 14,
    name: "Gazania rigens",
    tags: ["Outdoor", "Daisy"],
    image: "/src/assets/Gazania rigens.JPG",
    likes: 8,
    comments: [],
  },
  {
    id: 15,
    name: "Red Rose",
    tags: ["Outdoor", "Rosa"],
    image: "/src/assets/Red Rose.JPG",
    likes: 8,
    comments: [],
  },
  // Add more photos here...
];
function HomePage() {
  const [photos, setPhotos] = useState(photosData);

  // Handle Like
  const handleLike = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, likes: photo.likes + 1 } : photo
      )
    );
  };

  // Handle Add Comment
  const handleAddComment = (id, newComment) => {
    if (!newComment.trim()) return; // Prevent empty comments
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id
          ? {
              ...photo,
              comments: [
                ...photo.comments,
                { id: photo.comments.length + 1, text: newComment }, // Use a simple increment for ID
              ],
            }
          : photo
      )
    );
  };

  return (
    <div className="home-container">
      {/* Greeting Section */}
      <header className="welcome-section">
        <h1>Welcome to Root Roit App</h1>
        <p>Your one-stop solution for all plant care needs!</p>
      </header>

      {/* Photo Gallery */}
      <div className="photo-gallery">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.image} alt={photo.name} className="photo-image" />
            <div className="photo-details">
              <h3>{photo.name}</h3>
              <p className="photo-tags">
                {photo.tags.map((tag, index) => (
                  <span key={index} className="photo-tag">
                    #{tag}
                  </span>
                ))}
              </p>
              <div className="photo-actions">
                <button onClick={() => handleLike(photo.id)} aria-label={`Like ${photo.name}`}>
                  ❤️ {photo.likes}
                </button>
              </div>
              <div className="photo-comments">
                {photo.comments.map((comment) => (
                  <p key={comment.id}>{comment.text}</p>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newComment = e.target.elements.comment.value;
                  handleAddComment(photo.id, newComment);
                  e.target.reset();
                }}
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                  className="comment-input"
                  aria-label="Add a comment"
                />
                <button type="submit" className="comment-button">
                  Post
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;