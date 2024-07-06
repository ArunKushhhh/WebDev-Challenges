const followersNum = document.querySelectorAll(".followers-num");
// console.log(followersNum);

followersNum.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updateFollowers = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowers, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowers();
});
