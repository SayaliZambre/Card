import React from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <ProfileCard 
        imageUrl="https://via.placeholder.com/150"
        firstName="John"
        lastName="Doe"
        gender="Male"
        phone="+123 456 7890"
      />
    </div>
  );
};

export default App;
