import React, { useState, useEffect } from 'react';
import './yoga.css';

const YogaExercises = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to fetch categories from the API
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://yoga-api-nzy4.onrender.com/v1/categories');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    const selected = categories.find((category) => category.id === categoryId);
    setSelectedCategory(selected);
  };

  return (
    <div className="yoga-container">
      <div className="category-list">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className="category-button"
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.category_name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedCategory ? (
        <div className="selected-category">
          <h2>{selectedCategory.category_name}</h2>
          <p>{selectedCategory.category_description}</p>
          <ul>
            {selectedCategory.poses.map((exercise) => (
              <li key={exercise.id}>
                <div>
                  <h3>{exercise.english_name}</h3>
                  <p>{exercise.pose_description}</p>
                  <img src={exercise.url_svg} alt={exercise.english_name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="instructions">
          <h1>Yoga Exercises</h1>
          <p>Select a category to view exercises.</p>
        </div>
      )}
    </div>
  );
};

export default YogaExercises;
