const xIcon = document.getElementById('x-icon');
const menuIcon = document.getElementById('menu-icon');
const menuItems = document.getElementById('menu-items');
function setVersion(size) {
  if (size.matches) {
    menuIcon.style.display = 'none';
    xIcon.style.display = 'flex';
    menuItems.style.display = 'flex';
    xIcon.addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-home').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-about').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-contact').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
    document.getElementById('menu-developers').addEventListener('click', () => {
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
      menuItems.style.display = 'none';
    });
  }
}
menuIcon.addEventListener('click', () => {
  const size = window.matchMedia('(max-width: 768px)');
  setVersion(size);
});

const topDevelopers = [
  {
    profileUrl: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg',
    name: 'Momanyi Hassan',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxASP7dywthHPf5LICTwGvFmKLJCFZnF4h8QEG1pP8CbFbh1x15Cd5-j6zNIiAWz9H7g&usqp=CAU',
    name: 'Sam Ipke',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://www.justheadshots.photo/wp-content/uploads/2020/04/Dark-background-headshots-015.jpg',
    name: 'Anton Derzhaev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://pauliusmusteikis.com/wp-content/uploads/2018/11/business-headshot-of-man-1.jpg',
    name: 'Pavel Makarevich',
    subDesc: 'Back-End Developer',
    fullDesc: 'Teach Ruby, Python Javascript frameworks like Node.js and many more technologies',
  },
  {
    profileUrl: 'https://www.proheadshots.ca/wp-content/uploads/2016/03/vancouver-corporate-headshots-1.jpg',
    name: 'Dmitrii Vladimirtsev',
    subDesc: 'Full Stack Developer',
    fullDesc: 'Teach HTML CSS Bootstrap Javascript and many more technologies',
  },
  {
    profileUrl: 'https://www.richardsphotography.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Business-headshot-white-background-suit-and-tie-san-antonio-copy.jpg?bwg=1610738762',
    name: ' Kimani Ndungu',
    subDesc: 'Front End Developer',
    fullDesc: 'Teach HTML CSS Bootstrap and  Javascript including frameworks',
  },
];

const topArea = document.getElementById('top-area');
topDevelopers.forEach((developerData) => {
  const card = `
    <div class="card">
                <div class="card-body">
                    <img src="${developerData.profileUrl}"
                        alt="Developer-Icon">
                    <div class="card-desc">
                        <h2>${developerData.name}</h2>
                        <p class="desc">${developerData.subDesc}</p>
                        <div class="div-card-line"></div>
                        <p>${developerData.fullDesc}</p>
                    </div>
                </div>
            </div>`;
  topArea.innerHTML += card;
});
const btnMore = document.getElementById('btn-more');
const developer = Array.from(document.querySelectorAll('.top-area .card'));
developer.forEach((card, i) => {
  if (i > 1) {
    card.classList.add('hide');
  }
});

const handleMoreBtn = (developer) => {
  if (developer.classList.contains('hide')) {
    btnMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    btnMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
};

btnMore.addEventListener('click', () => {
  developer.forEach((developer, i) => {
    if (i > 1) {
      developer.classList.toggle('hide');
      handleMoreBtn(developer);
    }
  });
});
