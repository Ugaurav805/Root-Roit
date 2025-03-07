import { useState } from 'react';
import './PlantCareGuidePage.css';

function PlantCareGuidePage() {
  const [blogs, setBlogs] = useState([
    {
      title: 'How to Keep Your Spider Plant Thriving',
      description: 'Discover tips and tricks to help your spider plant grow faster and healthier.',
      content: 'Spider plants are very easy to take care of. They like indirect sunlight, and their soil should be kept slightly moist.',
      author: 'Admin',
    },
    {
      title: 'Watering Tips for Indoor Plants',
      description: 'A guide on how to properly water your indoor plants without over or under-watering.',
      content: 'Most indoor plants need to be watered only once a week. Be sure to check the moisture level of the soil before watering.',
      author: 'Admin',
    },
    {
      title: 'How to Take Care of Your Snake Plant',
      description: 'Snake plants are virtually indestructible, but they still need a little attention. Here’s how to keep them healthy.',
      content: 'Snake plants thrive in low light and can tolerate dry conditions. Water them every 2-3 weeks, allowing the soil to dry out completely before re-watering.',
      author: 'Admin',
    },
    {
      title: 'The Secret to Healthy Pothos Plants',
      description: 'Pothos are popular because they are low-maintenance and easy to grow. Learn the best way to take care of them.',
      content: 'Pothos like bright, indirect sunlight. Water when the top inch of soil is dry. If the leaves start to yellow, it could be a sign of over-watering.',
      author: 'Admin',
    },
    {
      title: 'Caring for Succulents: A Beginner’s Guide',
      description: 'Succulents need proper care, but they are incredibly rewarding. Follow these tips for succulent success.',
      content: 'Succulents prefer direct sunlight and should be watered sparingly. Water them every 2-3 weeks, allowing the soil to dry out between waterings.',
      author: 'Admin',
    },
    {
      title: 'How to Deal with Common Plant Pests',
      description: 'Learn how to identify and manage common plant pests like aphids, spider mites, and mealybugs.',
      content: 'To get rid of pests, you can try natural remedies like neem oil or insecticidal soap. Ensure your plant is in a well-ventilated area to reduce pest attraction.',
      author: 'Admin',
    },
    {
      title: 'Tips for Growing Healthy Indoor Plants',
      description: 'Indoor plants can thrive in your home if you know how to care for them properly. Here’s what you need to know.',
      content: 'Ensure your indoor plants get enough indirect sunlight. Also, consider the humidity levels in your home and use a humidity tray or a humidifier if needed.',
      author: 'Admin',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    content: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitBlog = (e) => {
    e.preventDefault();

    const newBlog = {
      ...form,
      author: 'User', // In a real app, you could add the user's name from authentication
    };

    setBlogs([...blogs, newBlog]);

    // Reset form fields
    setForm({
      title: '',
      description: '',
      content: '',
    });
  };

  return (
    <div className="blog-container">
      <h2>Plant Care Blog</h2>
      <p>Learn more about taking care of your plants, and share your knowledge with others!</p>

      {/* Submit Blog Form */}
      <div className="submit-blog-form">
        <h3>Write Your Own Blog</h3>
        <form onSubmit={handleSubmitBlog}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleFormChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Blog Description"
            value={form.description}
            onChange={handleFormChange}
            required
          />
          <textarea
            name="content"
            placeholder="Write your blog content..."
            value={form.content}
            onChange={handleFormChange}
            required
          ></textarea>
          <button type="submit">Submit Blog</button>
        </form>
      </div>

      {/* Display Blogs */}
      <section className="blogs-section">
        <h3>Plant Care Blogs</h3>
        {blogs.length === 0 ? (
          <p>No blogs yet. Be the first to share your knowledge!</p>
        ) : (
          <ul>
            {blogs.map((blog, index) => (
              <li key={index} className="blog-item">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <p><strong>By {blog.author}</strong></p>
                <div>{blog.content}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default PlantCareGuidePage;