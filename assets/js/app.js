(function ($) {
  let GAMES = [
    {
      title: "FECHA 1",
      date: "",
      description:
        "Obtuvimos una Victoria sobre el rival KINGS con un marcador de 77 a 70.",
      logo: "assets/images/logo kings.jpg",
    },
    {
      title: "FECHA 2",
      date: "",
      description:
        "Obtuvimos una Derrota sobre el rival INADAPTADOS con un marcador de 67 a 62.",
      logo: "assets/images/logo inadaptados.jpg",
    },
    {
      title: "FECHA 3",
      date: "",
      description:
        "Obtuvimos una Victoria sobre el rival GOAT con un marcador de 65 a 44",
      logo: "assets/images/logo-goat.jpg",
    },
  ];
  let PLAYERS = [
    {
      name: "Steven Rodriguez",
      position: "BASE",
      image: "assets/images/players/steven.jpg",
    },
    {
      name: "Manuel Ferrer",
      position: "ALERO",
      image: "assets/images/players/manuel.jpg",
    },
    {
      name: "Augusto Acosta",
      position: "ALERO",
      image: "assets/images/players/augusto.jpg",
    },
    {
      name: "Relly De La Rosa",
      position: "ALA PIVOT",
      image: "assets/images/players/relly.jpg",
    },
    {
      name: "Nelson Diaz",
      position: "PIVOT",
      image: "assets/images/players/nelson.jpg",
    },
  ];

  function gameList() {
    const gameContainer = $("#games-carrousel");
    GAMES.forEach((item) => {
      gameContainer.append(` <li>
      <img
        class="rounded-circle"
        src="${item.logo}"
        alt=""
      />
      <div class="text">
        <h6>${item.title} </h6>
        <p>
          ${item.description}
        </p>
      </div>
    </li>`);
    });
  }
  function playerList() {
    const carrousel = $("#player-galery");
    PLAYERS.forEach((item) => {
      carrousel
        .trigger("add.owl.carousel", [
          `<div class="item service-item">
               <div class="mr-3 ml-3">
                <img src="${item.image}" alt="" />
              </div>
               <h6 class="mt-5">${item.name}</h6>
               <p>${item.position}</p>
             </div>`,
        ])
        .trigger("refresh.owl.carousel");
    });
  }

  gameList();
  playerList();
})(window.jQuery);
