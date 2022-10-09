import React from 'react'
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
  return (<div
      className = "storyReel">
     <Story
        image="https://pixabay.com/es/photos/garza-cara-blanca-garza-7469269/</Story>"
        profileSrc="https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg?w=740"
        title="Darlene Sanz"
     />
     <Story
        image="https://pixabay.com/es/photos/%c3%a1rbol-reflexi%c3%b3n-niebla-agua-7403295/</Story>"
        profileSrc="https://img.freepik.com/premium-psd/doctor-3d-illustration-cartoon-character_561424-219.jpg?w=740"
        title="Vicente Vargas"
     />
     <Story
        image="https://pixabay.com/es/photos/p%c3%a1jaro-lavandera-de-varios-colores-7459335/</Story>"
        profileSrc="https://img.freepik.com/premium-psd/artist-3d-illustration-cartoon-character_561424-208.jpg?w=740"
        title="Cristian Jose"
     />
     

    </div>
  );
}

export default StoryReel;