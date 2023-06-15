

document.addEventListener('DOMContentLoaded', () => {
    const username = "Mark";
    const profileLevelIcon = document.querySelector('.profile-level-icon');
    const profileXpBar = document.querySelector('.profile-xp-bar');
  
    function setProfileLevel(level) {
      profileLevelIcon.style.backgroundColor = `#${level.toString(16).padStart(2, '0')}`;
      profileLevelIcon.innerHTML = "Level: " + level;
    }
  
    function setProfileXp(xp, totalXp) {
      const percentage = xp / totalXp * 100;
      profileXpBar.style.width = `${percentage}%`;
      profileXpBar.innerHTML = `${xp}/${totalXp} XP`;
    }
  
    // Example usage
    document.querySelector(".profile-header").innerHTML = username;
    setProfileLevel(10);
    setProfileXp(100, 200);
  });