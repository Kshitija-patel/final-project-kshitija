let index = 0;
let profiles = [];
window.onload = () => {
  fetch("/info")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      profiles = data;
      setData();
    });
};
setData = () => {
  // Images from https://www.freeimages.com/
  let profile = document.querySelector("#profile-data");
  profile.innerHTML = `<div><img src="${
    profiles[index].profile
  }" class="profile"/></div>
        <div class="profile-info">
            <p class="name">${profiles[index].name}</p>
            <a class="website" href="${
              profiles[index].website
            }" target="_BLANK">${profiles[index].website}</a>
            ${
              profiles[index].skills && profiles[index].skills.length
                ? `<ul>${getSkiilsString(profiles[index].skills)}</ul>`
                : ""
            }
    </div>`;
};

getSkiilsString = (skills) => {
  let str = "";
  for (let skill of skills) {
    str += "<li>" + skill + "</li>";
  }
  return str;
};
previous = () => {
  if (index != 0) index--;
  else index = profiles.length - 1;
  setData();
};
next = () => {
  if (index != profiles.length - 1) index++;
  else index = 0;
  setData();
};
