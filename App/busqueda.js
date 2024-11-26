const cardStack = document.querySelector('.card-stack');
const dislikeButton = document.getElementById('dislike');
const likeButton = document.getElementById('like');

// Datos para las cards
const cardsData = [
  { image: '../img/golden.jpg', name: 'Buddy', info: 'Golden Retriever, 2 años' },
  { image: '../img/husky.jpg', name: 'Luna', info: 'Husky, 3 años' },
  { image: '../img/bulldog.jpeg', name: 'Max', info: 'Bulldog, 1 año' },
  { image: '../img/beagle.jpg', name: 'Bella', info: 'Beagle, 4 años' },
  { image: '../img/poodle.png', name: 'Rex', info: 'Poodle, 5 años' },
  { image: '../img/german-shepherd.webp', name: 'Rocky', info: 'Pastor Alemán, 6 años' },
  { image: '../img/chihuahua.jpg', name: 'Pepper', info: 'Chihuahua, 1 año' },
  { image: '../img/labrador.jpg', name: 'Molly', info: 'Labrador, 3 años' },
  { image: '../img/pug.webp', name: 'Oscar', info: 'Pug, 2 años' },
  { image: '../img/dachshund.jpg', name: 'Charlie', info: 'Dachshund, 4 años' },
  { image: '../img/cocker-spaniel.webp', name: 'Daisy', info: 'Cocker Spaniel, 5 años' },
  { image: '../img/rottweiler.jpg', name: 'Bruno', info: 'Rottweiler, 6 años' },
  { image: '../img/border-collie.jpg', name: 'Toby', info: 'Border Collie, 3 años' },
  { image: '../img/shiba-inu.jpg', name: 'Yuki', info: 'Shiba Inu, 2 años' },
  { image: '../img/schnauzer.webp', name: 'Jack', info: 'Schnauzer, 4 años' },
  { image: '../img/rabbit1.jpg', name: 'Bunny', info: 'Conejo, 1 año' },
  { image: '../img/rabbit2.jpg', name: 'Fluffy', info: 'Conejo, 2 años' },
  { image: '../img/rabbit3.jpg', name: 'Snowy', info: 'Conejo, 3 años' },
  { image: '../img/cat1.jpg', name: 'Whiskers', info: 'Gato, 4 años' },
  { image: '../img/cat2.webp', name: 'Luna', info: 'Gata, 2 años' },
  { image: '../img/cat3.jpg', name: 'max', info: 'Gato, 3 años' },
  { image: '../img/cat4.jpg', name: 'Milo', info: 'Gato, 5 años' },
  { image: '../img/cat5.webp', name: 'Oliver', info: 'Gato, 6 años' }
];

// Crear las cards dinámicamente
const createCards = () => {
  cardsData.forEach((data, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${data.image})`;
    card.dataset.index = index;

    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `<h3>${data.name}</h3><p>${data.info}</p>`;
    card.appendChild(info);

    cardStack.appendChild(card);
  });
};

const handleSwipe = (direction) => {
  const cards = document.querySelectorAll('.card');
  const topCard = cards[cards.length - 1];

  if (topCard) {
    topCard.style.transform = `translateX(${direction === 'like' ? '100%' : '-100%'}) rotate(${direction === 'like' ? '20deg' : '-20deg'})`;
    topCard.style.opacity = '0';
    setTimeout(() => {
      topCard.remove();
    }, 300);
  }
};

// Botones de like y dislike
dislikeButton.addEventListener('click', () => handleSwipe('dislike'));
likeButton.addEventListener('click', () => handleSwipe('like'));

// Inicializar las cards
createCards();
