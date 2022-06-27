document.querySelector("form").addEventListener("submit", function (event) {
  // console.log(search)
  event.preventDefault();
  let option = document.querySelector(".inputField").value;

  let search = `https://api.edamam.com/api/recipes/v2?q=${option}&app_id=da6b5bfd&app_key=94031ae7cc4322e3ef2c5e273907f2fc&type=public&random=true`;

  fetch(search)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let unList = document.createElement("ul");
      for (let i = 0; i < res.hits.length; i++) {
        console.log(res.hits[i].recipe.label);
        let li = document.createElement("li");
        li.innerText = res.hits[i].recipe.label;
        let thum = document.createElement("img");
        thum.src = res.hits[i].recipe.images.SMALL.url;
        li.appendChild(thum);
        unList.appendChild(li);

        li.addEventListener("click", function () {
          let modal = document.getElementById("myModal");
          modal.innerHTML = '';
          modal.style.display = "block";
          let modalInfo = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <img src='${res.hits[i].recipe.image}'/>
            <ul class="health-labels" id="${res.hits[i].recipe.url}">
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="${res.hits[i].recipe.url}">Recipe Page</a>
          </div>
          `;

          modal.insertAdjacentHTML("beforeend", modalInfo);
          let span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          };
          // let cont = document.createElement('div')
          // let image = document.createElement('img')
          // image.src = res.hits[i].recipe.image
          // cont.appendChild(image)
          let healthCont = document.getElementById(`${res.hits[i].recipe.url}`);
          let healthLabel = "";

          for (let j = 0; j < res.hits[i].recipe.healthLabels.length; j++) {
            healthLabel += `<li>${res.hits[i].recipe.healthLabels[j]}</li>`;

            // let healthLI = document.createElement('li')
            // healthLI.innerText = res.hits[i].recipe.healthLabels[j]
            // healthLab.appendChild(healthLI)
            // let nutFacts = document.createElement('ul')
            // let nut = res.hits[i].recipe.totalDaily
          }
          healthCont.insertAdjacentHTML("beforeend", healthLabel);
        });
      }
      document.body.appendChild(unList);
    });
});

// let recipeArr = []
// let searchButton = document.querySelector('.searchButton')
// let recipeNames = document.querySelector('.recipe-names')
// let recipeImage = document.querySelector('.recipeImage')

// recipes.then(res => res.json())
//   data.preventDefault()

//   .then((data) => {
//   recipeArr.push(data.hits)

//   recipeName.innerHTML = `${recipeArr[4][0][0].label}`
//   recipeImage.src = recipes[4][0].recipe.image)
// }
// let openEls = document.querySelectorAll("[data-open]");
// let isVisible = "is-visible";
// let closeEls = document.querySelectorAll("[data-close]");

// for(let el of openEls) {
//   el.addEventListener("click", function() {
//     const modalId = this.dataset.open;
//     document.getElementById(modalId).classList.add(isVisible);
//   });
// }

// for (let el of closeEls) {
//   el.addEventListener("click", function() {
//     this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//   });
// }

// document.addEventListener("keyup", e => {
//   if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
//     document.querySelector(".modal.is-visible").classList.remove(isVisible);
//   }
// });
// let searchRecipe = (event) => {
//   event.preventDefault()

//   let result = document.querySelector('.input').value
//   let newUrl = `https://api.thecatapi.com/v1/images/search?category_ids=${result}`

//   fetch(newUrl, {
//     headers: {
//       'x-api-key': '94031ae7cc4322e3ef2c5e273907f2fc'
//     }
//   })
//   .then(res => res.json())
//   .then(res => document.querySelector('.categoryCatImage').src = res[0].url)
// }
// randomButton.addEventListener('click', randomCat)
// searchButton.addEventListener('click', searchCat)
