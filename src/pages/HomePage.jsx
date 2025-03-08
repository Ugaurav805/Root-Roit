import { useState } from "react";
import "./HomePage.css";

// Mock Photos Data
const photosData = [
  {
    id: 1,
    name: "Bougainvillea",
    tags: ["Outdoor", "Tropical"],
    image: "https://images.pexels.com/photos/1732419/pexels-photo-1732419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 12,
    comments: [
      { id: 1, text: "Beautiful plant!" },
      { id: 2, text: "Where can I get one?" },
    ],
  },
  {
    id: 2,
    name: "Buransh",
    tags: ["Outdoor", "WoodyPlant", "uttrakhand"],
    image: "https://i.pinimg.com/736x/12/7c/48/127c48217b6bd01b4bb1c2058fa1114d.jpg",
    likes: 8,
    comments: [{ id: 1, text: "The State tree of Uttrakhand!" }],
  },
  {
    id: 3,
    name: "Monstera",
    tags: ["Indoor", "Tropical"],
    image: "https://images.pexels.com/photos/3139367/pexels-photo-3139367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 4,
    name: "Catharanthus pink-roseus",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/28180041/pexels-photo-28180041/free-photo-of-a-pink-flower-with-green-leaves-and-water-drops.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 5,
    name: "Chrysanthemum",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/2943982/pexels-photo-2943982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 6,
    name: "Catharanthus white rosus",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/16637793/pexels-photo-16637793/free-photo-of-white-flowers-in-a-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 7,
    name: "A Blooming Orange and Yellow Dahlia Flower",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/9744676/pexels-photo-9744676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 8,
    name: "Dianthus",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/29583739/pexels-photo-29583739/free-photo-of-vibrant-pink-dianthus-flowers-in-garden-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 9,
    name: "Wall iris",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/18450492/pexels-photo-18450492/free-photo-of-iris-flowers-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 10,
    name: "Pink Rose",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 11,
    name: "The cherry blossom, or sakura, is Japan's national flower",
    tags: ["Outdoor", "Bright Light"],
    image: "https://images.pexels.com/photos/2076494/pexels-photo-2076494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 12,
    name: "Sunflower",
    tags: ["Outdoor", "Summer"],
    image: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 13,
    name: "Bush Lily Flowers",
    tags: ["Outdoor", "Love"],
    image: "https://images.pexels.com/photos/12531761/pexels-photo-12531761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 18,
    comments: [],
  },
  {
    id: 14,
    name: "Gazania rigens",
    tags: ["Outdoor", "Daisy"],
    image: "https://images.pexels.com/photos/10727274/pexels-photo-10727274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 15,
    name: "Red Rose",
    tags: ["Outdoor", "Rosa"],
    image: "https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    likes: 8,
    comments: [],
  },
  {
    id: 15,
    name: "Geranium maderense",
    tags: ["Outdoor", "Rosa"],
    image: "https://images.pexels.com/photos/12233450/pexels-photo-12233450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
