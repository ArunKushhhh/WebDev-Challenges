const track = document.querySelector(".img-track");

//creating a slider point
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

//tracking slider point
//adding virtual slider
window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDetla = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDetla) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    {
      duration: 1200,
      fill: "forwards",
    }
  );

  for (const image of track.querySelectorAll("img")) {
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}% 50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};
