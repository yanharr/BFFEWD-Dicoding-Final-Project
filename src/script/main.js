const main = () => {
  const getBook = () => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      const responseJson = JSON.parse(xhr.response);
      console.log(responseJson);
      renderAllBooks(responseJson.sports);
    };

    xhr.onerror = () => {
      showResponseMessage();
    };

    xhr.open("GET", "https://www.thesportsdb.com/api/v1/json/2/all_sports.php");
    xhr.send();
  };

  const renderAllBooks = (sports) => {
    const listLeaguesElement = document.querySelector("#listLeagues");
    listLeaguesElement.innerHTML = "";

    sports.forEach((sport) => {
      listLeaguesElement.innerHTML += `
          <article id="${sport.idSport}" class="card">
              <h1> <img src="${sport.strSportIconGreen}" class="logo"> ${sport.strSport}</h1>
              <h2>${sport.strFormat}</h2>
              <img src="${sport.strSportThumb}" class="image">
              
              <p>${sport.strSportDescription}</p>
          </article>
          `;
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  getBook();
};

export default main;
