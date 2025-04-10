import { useState, useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    // Initialiser AOS ici si nécessaire
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }

    $(document).ready(function () {
      // Header Scroll
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#header').addClass('scrolled');
        } else {
          $('#header').removeClass('scrolled');
        }
      });
  
      // Smooth Scroll
      $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500, 'linear');
      });
  
      // Mobile Menu
      $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.nav-links').toggleClass('active');
      });
  
      // Close mobile menu when clicking a link
      $('.nav-link').click(function () {
        $('.burger').removeClass('active');
        $('.nav-links').removeClass('active');
      });
  
      // Modal
      $('.btn').click(function (e) {
        e.preventDefault();
        $('#reservationModal').addClass('open');
      });
  
      $('.close-modal').click(function () {
        $('#reservationModal').removeClass('open');
      });
  
      $(window).click(function (e) {
        if ($(e.target).is('.modal')) {
          $('.modal').removeClass('open');
        }
      });
  
      // FAQ Accordion
      $('.faq-question').click(function () {
        $(this).toggleClass('active');
  
        // Close other answers
        $('.faq-question').not(this).removeClass('active');
        $('.faq-question').not(this).next('.faq-answer').css({
          'max-height': '0',
          'padding': '0 1.5rem'
        });
      });
  
      // Category Filter
      $('.category-btn').click(function () {
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        // Add filter functionality here
      });
  
      // Fade In Elements on Scroll
      $(window).scroll(function () {
        $('.fade-in').each(function () {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
  
          if (scroll + windowHeight > position) {
            $(this).addClass('active');
          }
        });
      });
  
      // Testimonial Slider
      let currentSlide = 0;
      const totalSlides = $('.testimonial').length;
  
      $('.dot').click(function () {
        currentSlide = $(this).index();
        updateSlider();
      });
  
      function updateSlider() {
        $('.testimonials-slider').css('transform', `translateX(-${currentSlide * 100}%)`);
        $('.dot').removeClass('active');
        $('.dot').eq(currentSlide).addClass('active');
      }
  
      // Auto slide
      setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }, 5000);
  
      // Adding animation to the floating button
      $('#addItemBtn').hover(
        function () {
          $(this).addClass('animate__animated animate__pulse');
        },
        function () {
          $(this).removeClass('animate__animated animate__pulse');
        }
      );
  
      // Animation for benefits
      $('.benefit').hover(
        function () {
          $(this).find('.benefit-icon').addClass('animate__animated animate__heartBeat');
        },
        function () {
          $(this).find('.benefit-icon').removeClass('animate__animated animate__heartBeat');
        }
      );
    });
  }, []);

  return (
    <div class='app'>
      <header id="header">
        <nav class="container">
          <div class="logo">Share<span>Loc</span></div>
          <ul class="nav-links">
            <li><a href="#featured" class="nav-link">Découvrir</a></li>
            <li><a href="#how" class="nav-link">Comment ça marche</a></li>
            <li><a href="#benefits" class="nav-link">Avantages</a></li>
            <li><a href="#testimonials" class="nav-link">Témoignages</a></li>
            <li><a href="#" class="btn ">Ajouter un objet</a></li>
            <li><a href="#" class="btn btn-secondary">Se connecter</a></li>
          </ul>
          <div class="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section class="hero" id="home">
        <div class="hero-content">
          <h1 class="animate__animated animate__fadeInUp">Tout est louable, pour tous</h1>
          <p class="animate__animated animate__fadeInUp animate__delay-1s">Louez tout type d'objets près de chez vous ou proposez vos biens à la location. Une solution économique et écologique pour toute la France.</p>
          <div class="first-div animate__animated animate__fadeInUp animate__delay-2s">
            <a href="#" class="btn">Trouver un objet</a>
            <a href="#" class="btn btn-secondary">Proposer à la location</a>
          </div>
        </div>
        <div class="scroll-down">
          <i class="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Search Form */}
      <div class="container">
        <div class="search-container" data-aos="fade-up">
          <form class="search-form">
            <div class="form-group">
              <label for="search">Que recherchez-vous ?</label>
              <input type="text" id="search" placeholder="Appareil photo, vélo, perceuse..." />
            </div>
            <div class="form-group">
              <label for="location">Où ?</label>
              <input type="text" id="location" placeholder="Ville, code postal" />
            </div>
            <div class="form-group">
              <label for="date">Quand ?</label>
              <input type="date" id="date" />
            </div>
            <div class="form-group">
              <label for="category">Catégorie</label>
              <select id="category">
                <option value="all">Toutes les catégories</option>
                <option value="electronics">Électronique</option>
                <option value="tools">Outils</option>
                <option value="vehicles">Véhicules</option>
                <option value="sports">Sports & Loisirs</option>
                <option value="home">Maison & Jardin</option>
              </select>
            </div>
            <div class="form-group">
              <label>&nbsp;</label>
              <button type="submit" class="btn btn-dark">Rechercher</button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Products */}
      <section class="section section-light" id="featured">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Découvrez nos objets</h2>
            <p>Des milliers d'objets disponibles près de chez vous pour tous vos besoins</p>
          </div>
          <div class="categories" data-aos="fade-up">
            <button class="category-btn active">Tous</button>
            <button class="category-btn">Électronique</button>
            <button class="category-btn">Outils</button>
            <button class="category-btn">Véhicules</button>
            <button class="category-btn">Sports & Loisirs</button>
            <button class="category-btn">Maison & Jardin</button>
          </div>
          <div class="items-container">
            {/* Item 1 */}
            <div class="item-card" data-aos="fade-up">
              <div class="item-tag">Populaire</div>
              <img src="/api/placeholder/400/320" alt="Appareil photo" class="item-img" />
              <div class="item-details">
                <h3 class="item-title">Canon EOS 5D Mark IV</h3>
                <div class="item-location"><i class="fas fa-map-marker-alt"></i> Paris, 75011</div>
                <div class="item-price">45€ <span>/ jour</span></div>
                <div class="item-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>(28)</span>
                </div>
                <div class="item-features">
                  <span class="item-feature"><i class="fas fa-check"></i> Livraison possible</span>
                  <span class="item-feature"><i class="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" class="btn">Réserver</a>
              </div>
            </div>

            {/* Item 2 */}
            <div class="item-card" data-aos="fade-up" data-aos-delay="100">
              <img src="/api/placeholder/400/320" alt="Perceuse" class="item-img" />
              <div class="item-details">
                <h3 class="item-title">Perceuse Bosch Professional</h3>
                <div class="item-location"><i class="fas fa-map-marker-alt"></i> Lyon, 69002</div>
                <div class="item-price">15€ <span>/ jour</span></div>
                <div class="item-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <span>(42)</span>
                </div>
                <div class="item-features">
                  <span class="item-feature"><i class="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" class="btn">Réserver</a>
              </div>
            </div>

            {/* Item 3  */}
            <div class="item-card" data-aos="fade-up" data-aos-delay="200">
              <div class="item-tag">Nouveau</div>
              <img src="/api/placeholder/400/320" alt="Vélo électrique" class="item-img" />
              <div class="item-details">
                <h3 class="item-title">Vélo électrique Decathlon</h3>
                <div class="item-location"><i class="fas fa-map-marker-alt"></i> Marseille, 13001</div>
                <div class="item-price">25€ <span>/ jour</span></div>
                <div class="item-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <span>(12)</span>
                </div>
                <div class="item-features">
                  <span class="item-feature"><i class="fas fa-check"></i> Livraison possible</span>
                  <span class="item-feature"><i class="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" class="btn">Réserver</a>
              </div>
            </div>

            {/* Item 4 */}
            <div class="item-card" data-aos="fade-up" data-aos-delay="300">
              <img src="/api/placeholder/400/320" alt="Console de jeux" class="item-img" />
              <div class="item-details">
                <h3 class="item-title">PlayStation 5</h3>
                <div class="item-location"><i class="fas fa-map-marker-alt"></i> Toulouse, 31000</div>
                <div class="item-price">20€ <span>/ jour</span></div>
                <div class="item-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                  <span>(35)</span>
                </div>
                <div class="item-features">
                  <span class="item-feature"><i class="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" class="btn">Réserver</a>
              </div>
            </div>
          </div>
          <div class="text-center" data-aos="fade-up">
            <a href="#" class="btn btn-see-more">Voir plus d'objets</a>
          </div>
        </div>
      </section>

      {/* How it works  */}
      <section class="section section-dark" id="how">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Comment ça marche</h2>
            <p>Un processus simple et sécurisé en quelques étapes</p>
          </div>
          <div class="how-it-works">
            <div class="step" data-aos="fade-right">
              <div class="step-number">1</div>
              <div class="connector"></div>
              <div class="step-content">
                <h3>Trouvez</h3>
                <p>Recherchez parmi des milliers d'objets disponibles près de chez vous en quelques clics.</p>
              </div>
            </div>
            <div class="step" data-aos="fade-right" data-aos-delay="100">
              <div class="step-number">2</div>
              <div class="connector"></div>
              <div class="step-content">
                <h3>Réservez</h3>
                <p>Sélectionnez vos dates et effectuez votre réservation en toute simplicité.</p>
              </div>
            </div>
            <div class="step" data-aos="fade-right" data-aos-delay="200">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Profitez</h3>
                <p>Récupérez l'objet et profitez-en pendant la durée souhaitée avant de le retourner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits  */}
      <section class="section section-light" id="benefits">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Pourquoi ShareLoc ?</h2>
            <p>Découvrez les avantages de notre plateforme de location entre particuliers</p>
          </div>
          <div class="benefits">
            <div class="benefit" data-aos="zoom-in">
              <div class="benefit-icon">
                <i class="fas fa-euro-sign"></i>
              </div>
              <h3>Économisez</h3>
              <p>Louez à moindre coût au lieu d'acheter. Rentabilisez vos objets en les proposant à la location.</p>
            </div>
            <div class="benefit" data-aos="zoom-in" data-aos-delay="100">
              <div class="benefit-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h3>Écologique</h3>
              <p>Réduisez votre empreinte carbone en partageant les ressources au lieu de surconsommer.</p>
            </div>
            <div class="benefit" data-aos="zoom-in" data-aos-delay="200">
              <div class="benefit-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Sécurisé</h3>
              <p>Système de vérification des utilisateurs et assurance pour les objets loués.</p>
            </div>
            <div class="benefit" data-aos="zoom-in" data-aos-delay="300">
              <div class="benefit-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3>Communautaire</h3>
              <p>Rejoignez une communauté d'entraide et créez des liens autour du partage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="section section-purple" id="testimonials">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Témoignages</h2>
            <p>Ce que disent nos utilisateurs</p>
          </div>
          <div class="testimonials-container" data-aos="fade-up">
            <div class="testimonials-slider">
              <div class="testimonial">
                <div class="testimonial-content">
                  <div class="testimonial-text">
                    J'ai pu louer un appareil photo pour mon voyage sans avoir à investir dans du matériel coûteux. Le processus était simple et le propriétaire très sympathique !
                  </div>
                </div>
                <div class="testimonial-author">
                  <img src="/api/placeholder/140/140" alt="Marie D." class="author-img" />
                  <div class="author-name">Marie D.</div>
                  <div class="author-info">Paris</div>
                </div>
              </div>
            </div>
            <div class="testimonial-controls">
              <div class="testimonial-dots">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="cta">
        <div class="container" data-aos="fade-up">
          <h2>Prêt à partager ?</h2>
          <p>Rejoignez notre communauté et commencez à louer ou proposer des objets dès maintenant.</p>
          <div class="cta-buttons">
            <a href="#" class="btn">S'inscrire gratuitement</a>
            <a href="#" class="app-badge">
              <span>Télécharger sur</span>
              <strong>App Store</strong>
            </a>
            <a href="#" class="app-badge">
              <span>Télécharger sur</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="section section-light" id="faq">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Questions fréquentes</h2>
            <p>Tout ce que vous devez savoir sur ShareLoc</p>
          </div>
          <div class="faq" data-aos="fade-up">
            <div class="faq-item">
              <div class="faq-question">Comment fonctionne l'assurance ?</div>
              <div class="faq-answer">
                <p>Tous les objets loués sur ShareLoc sont couverts par notre assurance partenaire. Elle protège contre les dommages accidentels, le vol et la perte pendant la durée de la location. Une franchise peut s'appliquer selon la valeur de l'objet.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">Comment sont gérés les paiements ?</div>
              <div class="faq-answer">
                <p>Les paiements sont sécurisés et traités via notre plateforme. L'argent est versé au propriétaire 24h après le début de la location pour garantir la sécurité des deux parties.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">Que faire en cas de problème avec un objet loué ?</div>
              <div class="faq-answer">
                <p>En cas de problème, contactez immédiatement le propriétaire via notre messagerie. Si le problème persiste, notre service client est disponible 7j/7 pour vous aider à résoudre la situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>ShareLoc</h3>
              <p>La plateforme de location entre particuliers qui rend tout louable pour tous, partout en France.</p>
              <div class="social-links">
                <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="footer-column">
              <h3>Liens utiles</h3>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Comment ça marche</a></li>
                <li><a href="#">Devenir loueur</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Nous contacter</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Catégories</h3>
              <ul>
                <li><a href="#">Électronique</a></li>
                <li><a href="#">Outils</a></li>
                <li><a href="#">Véhicules</a></li>
                <li><a href="#">Sports & Loisirs</a></li>
                <li><a href="#">Maison & Jardin</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>Newsletter</h3>
              <p>Recevez nos actualités et offres spéciales</p>
              <form class="newsletter-form">
                <input type="email" class="newsletter-input" placeholder="Votre email" />
                <button type="submit" class="newsletter-btn"><i class="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
          <div class="copy">
            <p>&copy; 2025 ShareLoc - Tous droits réservés</p>
          </div>
        </div>
      </footer>

      {/* Modal Reservation */}
      <div class="modal" id="reservationModal">
        <div class="modal-content">
          <button class="close-modal">&times;</button>
          <h2 class="reservation-title">Réserver cet objet</h2>
          <div class="form-header">
            <img src="/api/placeholder/160/160" alt="Objet" />
            <div class="form-header-info">
              <h3>Canon EOS 5D Mark IV</h3>
              <p>45€ / jour</p>
            </div>
          </div>
          <form class="reservation-form">
            <div class="form-row">
              <div class="form-group">
                <label for="start-date">Date de début</label>
                <input type="date" id="start-date" required />
              </div>
              <div class="form-group">
                <label for="end-date">Date de fin</label>
                <input type="date" id="end-date" required />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message pour le propriétaire (optionnel)</label>
              <textarea id="message" placeholder="Présentez votre projet, posez vos questions..."></textarea>
            </div>
            <div class="form-check">
              <input type="checkbox" id="terms" required />
              <label for="terms">J'accepte les conditions générales d'utilisation et la politique de confidentialité</label>
            </div>
            <button type="submit" class="btn btn-full">Réserver maintenant</button>
          </form>
        </div>
      </div>

      {/* Button Add Item */}
      <div class="floating-add-btn" id="addItemBtn">
        <i class="fas fa-plus"></i>
      </div>
    </div>
  )
}

export default App
