const team = [
  {
    id: 1,
    name: 'Dr. T',
    email: 'drt@drt.com',
    favoriteColor: 'red',
    image: 'https://avatars3.githubusercontent.com/u/29741570?s=460&u=16cc038bd4c459a12eb198fc313043cd37c80a64&v=4',
  },
  {
    id: 2,
    name: 'Aja',
    email: 'drt@drt.com',
    favoriteColor: 'RED',
    image: 'https://avatars3.githubusercontent.com/u/57641436?s=400&u=1383b4d27114c6c7e3f05d55a4b4ac536971316a&v=4',
  },
  {
    id: 3,
    name: 'Trinity',
    email: 'drt@drt.com',
    favoriteColor: 'blue',
    image: 'https://avatars1.githubusercontent.com/u/31781724?s=460&u=10531433afe0ed55948173fab061a75fc3ffa8c1&v=4',
  },
];

// Instantiated this at the top of the file to be reused
const rootElement = document.querySelector('#root');

// Turned this into a function to make the code DRY-er
const renderTeamToDom = () => {
  rootElement.innerHTML = ""
  team.forEach((memberObj) => {
    rootElement.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${memberObj.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${memberObj.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  });
};

// Renders the Cards to the DOM on load
renderTeamToDom();

// A user adds a member using a form, and this is the data they inputted
const newMember = {
  id: 4,
  name: 'Ajax',
  email: 'drt@drt.com',
  favoriteColor: 'blue',
  image: 'https://picsum.photos/200/300',
}

// Adding new member to the team
team.push(newMember);

// Rerender the cards to the DOM after the datais updated
renderTeamToDom();
