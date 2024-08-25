/*






// Créer une fonction pour générer les éléments HTML
function generateHTML() {
    // Créer l'élément <section>
    var section = document.createElement('section');
    section.classList.add('section', 'hero');
    section.id = 'home';
    section.setAttribute('aria-label', 'home');
  
    // Créer l'élément <div> avec la classe 'container'
    var container = document.createElement('div');
    container.classList.add('container');
    section.appendChild(container);
  
    // Créer l'élément <ul> avec la classe 'hero-list'
    var ul = document.createElement('ul');
    ul.classList.add('hero-list');
    container.appendChild(ul);
  
    // Créer une liste des données d'images
    var images = [
      { src: './assets/images/hero-product-1.jpg', alt: 'Art Deco Home', width: 285, height: 396 },
      { src: './assets/images/hero-product-2.jpg', alt: 'Helen Chair', width: 568, height: 389 },
      { src: './assets/images/hero-product-3.jpg', alt: 'Vase Of Flowers', width: 285, height: 396 },
      { src: './assets/images/hero-product-4.jpg', alt: 'Wood Eggs', width: 580, height: 213 },
      { src: './assets/images/hero-product-5.jpg', alt: 'Table Wood Pine', width: 580, height: 213 }
    ];
  
    // Parcourir les données d'images et créer les éléments correspondants
    images.forEach(function(imageData) {
      // Créer l'élément <li>
      var li = document.createElement('li');
  
      // Créer l'élément <div> avec la classe 'hero-card'
      var divCard = document.createElement('div');
      divCard.classList.add('hero-card');
      li.appendChild(divCard);
  
      // Créer l'élément <figure> avec la classe 'card-banner' et les données d'image
      var figure = document.createElement('figure');
      figure.classList.add('card-banner', 'img-holder');
      figure.style.setProperty('--width', imageData.width + 'px');
      figure.style.setProperty('--height', imageData.height + 'px');
      divCard.appendChild(figure);
  
      // Créer l'élément <img> avec les attributs src, alt et les dimensions
      var img = document.createElement('img');
      img.src = imageData.src;
      img.alt = imageData.alt;
      img.width = imageData.width;
      img.height = imageData.height;
      img.classList.add('img-cover');
      figure.appendChild(img);
  
      // Créer l'élément <div> avec la classe 'card-content'
      var divContent = document.createElement('div');
      divContent.classList.add('card-content');
      divCard.appendChild(divContent);
  
      // Créer l'élément <h3> avec l'élément <a> et la classe 'card-title'
      var h3 = document.createElement('h3');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = imageData.alt;
      a.classList.add('card-title');
      h3.appendChild(a);
      divContent.appendChild(h3);
  
      // Créer l'élément <p> avec la classe 'card-text'
      var p = document.createElement('p');
      p.classList.add('card-text');
      p.textContent = 'Decoration'; // Peut être modifié selon vos besoins
      divContent.appendChild(p);
  
      // Ajouter l'élément <li> à la liste <ul>
      ul.appendChild(li);
    });
  
    // Ajouter la section générée au <body> ou à un autre élément selon vos besoins
    document.body.appendChild(section);
  }
  
  // Appeler la fonction pour générer la structure HTML
  generateHTML();
  // Fonction pour générer la section "About"
function generateAboutSection() {
    // Création de la section
    var section = document.createElement('section');
    section.classList.add('section', 'about');
    section.id = 'about';
    section.setAttribute('aria-label', 'about');
  
    // Contenu de la section
    section.innerHTML = `
      <div class="container">
        <h2 class="section-title">Woodex Store</h2>
        <p class="section-text">
          When you start with a portrait and search for a pure form, a clear volume, through successive eliminations,
          you arrive inevitably at the egg. Likewise, starting with the egg and following the same process in reverse, one finishes with the
          portrait.
        </p>
        <div class="about-card">
          <figure class="card-banner img-holder" style="--width: 1170; --height: 450;">
            <img src="./assets/images/about-banner.jpg" width="1170" height="450" loading="lazy" alt="Woodex promo" class="img-cover">
          </figure>
          <button class="play-btn" aria-label="play video">
            <ion-icon name="play-circle-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    `;
  
    // Ajout de la section au body ou à un autre élément selon vos besoins
    document.body.appendChild(section);
  }
  
  // Fonction pour générer la section "Products"
  function generateProductsSection() {
    // Création de la section
    var section = document.createElement('section');
    section.classList.add('section', 'product');
    section.id = 'product';
    section.setAttribute('aria-label', 'product');
  
    // Contenu de la section
    section.innerHTML = `
      <div class="container">
        <div class="title-wrapper">
          <h2 class="h2 section-title">Popular Products</h2>
          <ul class="filter-btn-list">
            <li class="filter-btn-item">
              <button class="filter-btn active" data-filter-btn="all">All Products</button>
            </li>
            <li class="filter-btn-item">
              <button class="filter-btn" data-filter-btn="accessory">Accessory</button>
            </li>
            <li class="filter-btn-item">
              <button class="filter-btn" data-filter-btn="decoration">Decoration</button>
            </li>
            <li class="filter-btn-item">
              <button class="filter-btn" data-filter-btn="furniture">Furniture</button>
            </li>
          </ul>
        </div>
        <ul class="grid-list product-list" data-filter="all">
          <!-- Contenu des produits -->
        </ul>
      </div>
    `;
  
    // Ajout de la section au body ou à un autre élément selon vos besoins
    document.body.appendChild(section);
  }
  
  // Appel des fonctions pour générer les sections
  generateAboutSection();
  generateProductsSection();

  


  // Fonction pour générer les éléments de la liste de produits
function generateProductList() {
    // Liste des produits
    var products = [
      {
        category: 'accessory',
        name: 'High Quality Glass Bottle',
        price: 30.10,
        image: './assets/images/product-8.jpg'
      },
      {
        category: 'accessory',
        name: 'Living Room & Bedroom Lights',
        price: 45.00,
        image: './assets/images/product-9.jpg'
      },
      {
        category: 'furniture',
        name: 'Nancy Chair',
        price: 90.00,
        image: './assets/images/product-10.jpg'
      },
      {
        category: 'furniture',
        name: 'Simple Chair',
        price: 40.00,
        image: './assets/images/product-11.jpg'
      },
      {
        category: 'decoration',
        name: 'Smooth Disk',
        price: 46.00,
        image: './assets/images/product-12.jpg'
      },
      {
        category: 'furniture',
        name: 'Table Black',
        price: 67.00,
        image: './assets/images/product-13.jpg'
      },
      {
        category: 'furniture',
        name: 'Table Wood Pine',
        price: 50.00,
        image: './assets/images/product-14.jpg'
      },
      {
        category: 'accessory',
        name: 'Teapot with black tea',
        price: 25.00,
        image: './assets/images/product-15.jpg'
      },
      {
        category: 'decoration',
        name: 'Unique Decoration',
        price: 35.00,
        image: './assets/images/product-16.jpg'
      }
    ];
  
    // Sélection de l'élément de la liste de produits
    var productList = document.querySelector('.product-list');
  
    // Génération des éléments de la liste de produits
    products.forEach(function(product) {
      // Création de l'élément de la liste
      var listItem = document.createElement('li');
      listItem.classList.add(product.category);
  
      // Contenu de l'élément de la liste
      listItem.innerHTML = `
        <div class="product-card">
          <a href="#" class="card-banner img-holder has-before" style="--width: 300; --height: 300;">
            <img src="${product.image}" width="300" height="300" loading="lazy" alt="${product.name}" class="img-cover">
            <ul class="card-action-list">
              <li>
                <button class="card-action-btn" aria-label="add to cart" title="add to cart">
                  <ion-icon name="add-outline" aria-hidden="true"></ion-icon>
                </button>
              </li>
              <li>
                <button class="card-action-btn" aria-label="add to cart" title="add to cart">
                  <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                </button>
              </li>
              <li>
                <button class="card-action-btn" aria-label="add to whishlist" title="add to whishlist">
                  <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                </button>
              </li>
            </ul>
          </a>
          <div class="card-content">
            <h3 class="h3">
              <a href="#" class="card-title">${product.name}</a>
            </h3>
            <div class="card-price">
              <data class="price" value="${product.price}">$${product.price.toFixed(2)}</data>
            </div>
          </div>
        </div>
      `;
  
      // Ajout de l'élément à la liste de produits
      productList.appendChild(listItem);
    });
  }
  
  // Appel de la fonction pour générer les éléments de la liste de produits
  generateProductList();
  // Création de la liste de produits
const productList = document.createElement('ul');
productList.classList.add('product-list');

// Création des éléments individuels de produit
const productsData = [
  {
    name: "Unique Decoration",
    price: 15,
    imageUrl: "./assets/images/product-15.jpg"
  },
  {
    name: "Vase Of Flowers",
    price: 77,
    imageUrl: "./assets/images/product-16.jpg"
  },
  {
    name: "Wood Eggs",
    price: 19,
    imageUrl: "./assets/images/product-17.jpg"
  },
  {
    name: "Wooden Box",
    price: 27,
    imageUrl: "./assets/images/product-18.jpg"
  },
  {
    name: "Wooden Cups",
    price: 29,
    imageUrl: "./assets/images/product-19.jpg"
  }
];

productsData.forEach(product => {
  const listItem = document.createElement('li');
  listItem.classList.add('decoration');

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productLink = document.createElement('a');
  productLink.href = "#";
  productLink.classList.add('card-banner', 'img-holder', 'has-before');
  productLink.style.setProperty('--width', '300');
  productLink.style.setProperty('--height', '300');

  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.width = "300";
  productImage.height = "300";
  productImage.loading = "lazy";
  productImage.alt = product.name;
  productImage.classList.add('img-cover');

  productLink.appendChild(productImage);

  const actionList = document.createElement('ul');
  actionList.classList.add('card-action-list');

  const addToCartButton = createButton('add to cart', 'add-outline');
  const addToBagButton = createButton('add to cart', 'bag-handle-outline');
  const addToWishlistButton = createButton('add to whishlist', 'heart-outline');

  actionList.appendChild(addToCartButton);
  actionList.appendChild(addToBagButton);
  actionList.appendChild(addToWishlistButton);

  productLink.appendChild(actionList);
  productCard.appendChild(productLink);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const title = document.createElement('h3');
  title.classList.add('h3');
  const titleLink = document.createElement('a');
  titleLink.href = "#";
  titleLink.classList.add('card-title');
  titleLink.textContent = product.name;
  title.appendChild(titleLink);

  const price = document.createElement('div');
  price.classList.add('card-price');
  const priceData = document.createElement('data');
  priceData.classList.add('price');
  priceData.value = product.price;
  priceData.textContent = `$${product.price.toFixed(2)}`;
  price.appendChild(priceData);

  cardContent.appendChild(title);
  cardContent.appendChild(price);

  productCard.appendChild(cardContent);
  listItem.appendChild(productCard);
  productList.appendChild(listItem);
});

// Ajout de la liste de produits au document
document.getElementById('container').appendChild(productList);

// Fonction utilitaire pour créer un bouton avec un icon
function createButton(ariaLabel, iconName) {
  const button = document.createElement('button');
  button.classList.add('card-action-btn');
  button.setAttribute('aria-label', ariaLabel);
  button.setAttribute('title', ariaLabel);
  const icon = document.createElement('ion-icon');
  icon.setAttribute('name', iconName);
  icon.setAttribute('aria-hidden', 'true');
  button.appendChild(icon);
  return button;
}





// Création de la section Blog
const blogSection = document.createElement('section');
blogSection.classList.add('section', 'blog');
blogSection.setAttribute('aria-label', 'blog');

const blogContainer = document.createElement('div');
blogContainer.classList.add('container');

const blogTitleWrapper = document.createElement('div');
blogTitleWrapper.classList.add('title-wrapper');

const blogTitle = document.createElement('h2');
blogTitle.classList.add('h2', 'section-title');
blogTitle.textContent = 'Explore our blog';

const viewAllLink = document.createElement('a');
viewAllLink.href = "#";
viewAllLink.classList.add('btn-link');

const viewAllSpan = document.createElement('span');
viewAllSpan.classList.add('span');
viewAllSpan.textContent = 'View All';

const viewAllIcon = document.createElement('ion-icon');
viewAllIcon.setAttribute('name', 'arrow-forward');
viewAllIcon.setAttribute('aria-hidden', 'true');

viewAllLink.appendChild(viewAllSpan);
viewAllLink.appendChild(viewAllIcon);

blogTitleWrapper.appendChild(blogTitle);
blogTitleWrapper.appendChild(viewAllLink);

const blogList = document.createElement('ul');
blogList.classList.add('grid-list');

// Données des articles de blog
const blogData = [
  {
    title: "Unique products that will impress your home in 2022.",
    date: "November 27, 2022",
    author: "Admin",
    category: "deco",
    imageUrl: "./assets/images/blog-1.jpg"
  },
  {
    title: "Navy Blue & White Striped Area Rugs",
    date: "November 25, 2022",
    author: "Admin",
    category: "deco",
    imageUrl: "./assets/images/blog-2.jpg"
  },
  {
    title: "Woodex White Coated Staircase Floating",
    date: "November 18, 2022",
    author: "Admin",
    category: "deco",
    imageUrl: "./assets/images/blog-3.jpg"
  }
];

// Création des articles de blog
blogData.forEach(blog => {
  const blogItem = document.createElement('li');

  const blogCard = document.createElement('div');
  blogCard.classList.add('blog-card');

  const cardBanner = document.createElement('div');
  cardBanner.classList.add('card-banner', 'img-holder');
  cardBanner.style.setProperty('--width', '374');
  cardBanner.style.setProperty('--height', '243');

  const blogImage = document.createElement('img');
  blogImage.src = blog.imageUrl;
  blogImage.width = "374";
  blogImage.height = "243";
  blogImage.loading = "lazy";
  blogImage.alt = blog.title;
  blogImage.classList.add('img-cover');

  const readMoreLink = document.createElement('a');
  readMoreLink.href = "#";
  readMoreLink.classList.add('card-btn');

  const readMoreSpan = document.createElement('span');
  readMoreSpan.classList.add('span');
  readMoreSpan.textContent = 'Read more';

  const readMoreIcon = document.createElement('ion-icon');
  readMoreIcon.setAttribute('name', 'add-outline');
  readMoreIcon.setAttribute('aria-hidden', 'true');

  readMoreLink.appendChild(readMoreSpan);
  readMoreLink.appendChild(readMoreIcon);

  cardBanner.appendChild(blogImage);
  cardBanner.appendChild(readMoreLink);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const blogTitle = document.createElement('h3');
  blogTitle.classList.add('h3');

  const blogTitleLink = document.createElement('a');
  blogTitleLink.href = "#";
  blogTitleLink.classList.add('card-title');
  blogTitleLink.textContent = blog.title;

  blogTitle.appendChild(blogTitleLink);

  const metaList = document.createElement('ul');
  metaList.classList.add('card-meta-list');

  const dateMetaItem = createMetaItem('card-meta-text', blog.date);
  const authorMetaItem = createMetaItem('card-meta-text', blog.author);
  const categoryMetaItem = createMetaItem('card-meta-text', blog.category);

  metaList.appendChild(dateMetaItem);
  metaList.appendChild(authorMetaItem);
  categoryMetaItem.appendChild(document.createTextNode('in '));
  metaList.appendChild(categoryMetaItem);

  cardContent.appendChild(blogTitle);
  cardContent.appendChild(metaList);

  blogCard.appendChild(cardBanner);
  blogCard.appendChild(cardContent);

  blogItem.appendChild(blogCard);
  blogList.appendChild(blogItem);
});

blogContainer.appendChild(blogTitleWrapper);
blogContainer.appendChild(blogList);
blogSection.appendChild(blogContainer);

// Création de la section Newsletter
const newsletterSection = document.createElement('section');
newsletterSection.classList.add('section', 'newsletter');
newsletterSection.setAttribute('aria-label', 'newsletter');

const newsletterContainer = document.createElement('div');
newsletterContainer.classList.add('container');

const newsletterCard = document.createElement('div');
newsletterCard.classList.add('newsletter-card');

const newsletterCardContent = document.createElement('div');
newsletterCardContent.classList.add('card-content');

const newsletterTitle = document.createElement('h2');
newsletterTitle.classList.add('h2', 'section-title');
newsletterTitle.textContent = 'Our Newsletter';

const newsletterText = document.createElement('p');
newsletterText.classList.add('section-text');
newsletterText.textContent = 'Subscribe our newsletter and get discount 50% off';

newsletterCardContent.appendChild(newsletterTitle);
newsletterCardContent.appendChild(newsletterText);

const newsletterForm = document.createElement('form');
newsletterForm.action = "";
newsletterForm.classList.add('card-form');

const emailField = document.createElement('input');
emailField.type = 'email';
emailField.name = 'email_address';
emailField.placeholder = 'Your email address';
emailField.required = true;
emailField.classList.add('email-field');

const newsletterButton = document.createElement('button');
newsletterButton.type = 'submit';
newsletterButton.classList.add('newsletter-btn');
newsletterButton.setAttribute('aria-label', 'subscribe');

const arrowIcon = document.createElement('ion-icon');
arrowIcon.setAttribute('name', 'arrow-forward');
arrowIcon.setAttribute('aria-hidden', 'true');

newsletterButton.appendChild(arrowIcon);
newsletterForm.appendChild(emailField);
newsletterForm.appendChild(newsletterButton);

newsletterCard.appendChild(newsletterCardContent);
newsletterCard.appendChild(newsletterForm);

newsletterContainer.appendChild(newsletterCard);
newsletterSection.appendChild(newsletterContainer);

// Création de la section Footer
const footerSection = document.createElement('footer');
footerSection.classList.add('footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('container');

const footerTop = document.createElement('div');
footerTop.classList.add('footer-top', 'section');

const footerBrand = document.createElement('div');
footerBrand.classList.add('footer-brand');

const logoLink = document.createElement('a');
logoLink.href = "#";
logoLink.classList.add('logo');
logoLink.textContent = 'Woodex';

*/




