import { useState } from "react";

const skillConfig = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Figma", icon: "🎨" },
  { name: "CSS", icon: "💅" },
  { name: "UI Design", icon: "✨" },  
];

const images = [
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
];

function ProfileCard() {
  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const nextPhoto = () => setIndex((index + 1) % images.length);
  const prevPhoto = () => setIndex((index - 1 + images.length) % images.length);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((l) => (liked ? l - 1 : l + 1));
  };

  const handleContact = () => {
    alert("📬 Thanks for reaching out! I'll get back to you soon.");
  };

  return (
    <div className="card animate-in">
      {/* Avatar */}
      <div className="profile-avatar-wrap">
        <img src={images[index]} alt="profile" />
      </div>

      {/* Avatar navigation dots */}
      <div className="avatar-nav">
        {images.map((_, i) => (
          <span
            key={i}
            className={`avatar-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Name & title */}
      <h2>Alex Johnson</h2>
      <h4>Frontend Developer & UI Designer</h4>
      <p className="bio">
        Passionate about building beautiful, performant web experiences with
        React. 3+ years of experience crafting modern UIs.
      </p>

      {/* Social links */}
      <div className="social-links">
        <button className="social-btn" onClick={() => alert("GitHub profile")}>
          🐙 GitHub
        </button>
        <button className="social-btn" onClick={() => alert("LinkedIn profile")}>
          💼 LinkedIn
        </button>
        <button className="social-btn" onClick={() => alert("Twitter profile")}>
          🐦 Twitter
        </button>
      </div>

      {/* Skills */}
      <div className="skills-wrap">
        {skillConfig.map((s) => (
          <span key={s.name} className="badge">
            {s.icon} {s.name}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="card-actions">
        <button className="btn-sm btn-outline" onClick={prevPhoto}>
          ← Prev Photo
        </button>
        <button className="btn-sm btn-outline" onClick={nextPhoto}>
          Next Photo →
        </button>
        <button onClick={handleContact}>📬 Contact Me</button>
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {liked ? "❤️" : "🤍"} {likes > 0 ? likes : ""} Like
          {likes !== 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;