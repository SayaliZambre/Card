import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard"; // Import ProfileCard

const API_URL = "https://randomuser.me/api/?page=1&results=1&seed=abc";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (!user) {
    return <div className="text-center text-white text-2xl mt-10">Loading...</div>;
  }

  return <ProfileCard user={user} />;
};

export default App;
