import "./App.css";
import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/avatar.jpg";

export default function App() {
  const user = {
    name: "Satayesh Esmaily",
    username: "@Satayesh",
    avatarImage: avatarImage, 
    xp: 80,
    lastActive: "Dec 24, 2025",
    streakDays: 7,
    longestStreak: 8,
    recentBadgesText: "No badges earned yet.",
  
    personalInfo: {
      Email: "setayeshesmaily59@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province orState ": "Herat",
      "Date Of Birth": "4/4/2009",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english",
      Bio: "Student @CodeToInspire",
    },
  
    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };
  

  return (
    <div className="page">
      <ProfilePage user={user} />
    </div>
  );
}
