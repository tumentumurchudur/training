
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
      const rand = Math.floor(Math.random() * 30);

      if (entry.isIntersecting === true) {
          const img = entry.target.querySelector("img");
          entry.target.classList.add("inview");
          img.src = `https://source.unsplash.com/random/960x540/?${rand}`;
      } else {
          entry.target.classList.remove("inview");
      }
  });
});
const items = document.querySelectorAll(".grid-item");

// Register dom elements with observer instance.
items.forEach((item, index) => {
  observer.observe(item, index);
});