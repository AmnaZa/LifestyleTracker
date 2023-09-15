import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';
import './home.css'; // Import your custom styles

function HomePage({ user, setUser }) {
  return (
    <div>
      <NavBar /> {/* Render the navigation bar on the home page */}
      <div className="home-container">
        <div className="home-content">
          <title>FIT-MIND</title>
          <link href="https://fonts.googleapis.com/css?family=Courgette|Open+Sans&display=swap" rel="stylesheet" />

          <section>
            <h2>Hello, {user ? user.name : 'Guest'}!</h2>

            <div className="leaf">
              <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" alt="Autumn Leaves 1" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" alt="Autumn Leaves 2" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" alt="Autumn Leaves 3" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" alt="Autumn Leaves 4" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" alt="Autumn Leaves 5" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" alt="Autumn Leaves 6" height="75px" width="75px" /></div>
              <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" alt="Autumn Leaves 7" height="75px" width="75px" /></div>
            </div>


            <div className="leaf leaf1">
              <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" alt="Autumn Leaves 8" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" alt="Autumn Leaves 9" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" alt="Autumn Leaves 10" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" alt="Autumn Leaves 11" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" alt="Autumn Leaves 12" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" alt="Autumn Leaves 13" height="75px" width="75px" /></div>
              <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" alt="Autumn Leaves 14" height="75px" width="75px" /></div>
            </div>


            <div className="leaf leaf2">
              <div><img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" alt="Autumn Leaves 15" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" alt="Autumn Leaves 16" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png" alt="Autumn Leaves 17" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Green-Leaves-PNG-File.png" alt="Autumn Leaves 18" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png" alt="Autumn Leaves 19" height="75px" width="75px" /></div>
              <div><img src="http://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png" alt="Autumn Leaves 20" height="75px" width="75px" /></div>
              <div><img src="http://cdn.clipart-db.ru/rastr/autumn_leaves_025.png" alt="Autumn Leaves 21" height="75px" width="75px" /></div>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
