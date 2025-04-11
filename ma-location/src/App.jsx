import { useState, useEffect } from 'react';
import '../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import AppareilPhoto from './assets/appareil-photo.jpg'; 
import Perceuse from './assets/perceuse.jpg';
import Velo from './assets/velo-deca.jpg';
import Cliente from './assets/madame.jpg'; 

import Facebook from './assets/Facebook.png';
import Twitter from './assets/Twitter.jpg';
import Instagram from './assets/Instagram.webp';
import LinkedIn from './assets/LinkedIn.webp';

export default function App() {

  useEffect(() => {

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
      $('.btn-modal').click(function (e) {
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

      // Animation htmlFor benefits
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
    <div className='app'>
      <header id="header">
        <nav className="container">
          <div className="logo"><a className='home-btn' href='/'>M.A<span>Location</span></a></div>
          <ul className="nav-links">
            <li><a href="#featured" className="nav-link">Découvrir</a></li>
            <li><a href="#how" className="nav-link">Comment ça marche</a></li>
            <li><a href="#benefits" className="nav-link">Avantages</a></li>
            <li><a href="#testimonials" className="nav-link">Témoignages</a></li>
            <li><a href="#" className="btn nav-btn">Ajouter un objet</a></li>
            <li><a href="/login" className="btn nav-btn btn-secondary">Se connecter</a></li>
          </ul>
          <div className="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInUp">Tout est louable, pour tous</h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s">Louez tout type d'objets près de chez vous ou proposez vos biens à la location. Une solution économique et écologique pour toute la France.</p>
          <div className="group-btn animate__animated animate__fadeInUp animate__delay-2s">
            <a href="#" className="btn">Trouver un objet</a>
            <a href="#" className="btn btn-secondary">Proposer à la location</a>
          </div>
        </div>
        <div className="scroll-down">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Search Form */}
      <div className="container">
        <div className="search-container" data-aos="fade-up">
          <form className="search-form">
            <div className="form-group">
              <label htmlFor="search">Que recherchez-vous ?</label>
              <input type="text" id="search" placeholder="Appareil photo, vélo, perceuse..." />
            </div>
            <div className="form-group">
              <label htmlFor="location">Où ?</label>
              <input type="text" id="location" placeholder="Ville, code postal" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Quand ?</label>
              <input type="date" id="date" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Catégorie</label>
              <select id="category">
                <option value="all">Toutes les catégories</option>
                <option value="electronics">Électronique</option>
                <option value="tools">Outils</option>
                <option value="vehicles">Véhicules</option>
                <option value="sports">Sports & Loisirs</option>
                <option value="home">Maison & Jardin</option>
              </select>
            </div>
            <div className="form-group">
              <label>&nbsp;</label>
              <button type="submit" className="btn btn-dark">Rechercher</button>
            </div>
          </form>
        </div>
      </div>

      {/* Featured Products */}
      <section className="section section-light" id="featured">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Découvrez nos objets</h2>
            <p>Des milliers d'objets disponibles près de chez vous pour tous vos besoins</p>
          </div>
          <div className="categories" data-aos="fade-up">
            <button className="category-btn active">Tous</button>
            <button className="category-btn">Électronique</button>
            <button className="category-btn">Outils</button>
            <button className="category-btn">Véhicules</button>
            <button className="category-btn">Sports & Loisirs</button>
            <button className="category-btn">Maison & Jardin</button>
          </div>
          <div className="items-container">
            {/* Item 1 */}
            <div className="item-card" data-aos="fade-up">
              <div className="item-tag">Populaire</div>
              <img  src={AppareilPhoto} alt="Appareil photo" className="item-img" />
              <div className="item-details">
                <h3 className="item-title">Canon EOS 5D Mark IV</h3>
                <div className="item-location"><i className="fas fa-map-marker-alt"></i> Paris, 75011</div>
                <div className="item-price">45€ <span>/ jour</span></div>
                <div className="item-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
                  <span>(28)</span>
                </div>
                <div className="item-features">
                  <span className="item-feature"><i className="fas fa-check"></i> Livraison possible</span>
                  <span className="item-feature"><i className="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" className="btn">Réserver</a>
              </div>
            </div>

            {/* Item 2 */}
            <div className="item-card" data-aos="fade-up" data-aos-delay="100">
              <img src={Perceuse} alt="Perceuse" className="item-img" />
              <div className="item-details">
                <h3 className="item-title">Perceuse Bosch Professional</h3>
                <div className="item-location"><i className="fas fa-map-marker-alt"></i> Lyon, 69002</div>
                <div className="item-price">15€ <span>/ jour</span></div>
                <div className="item-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }}/>
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
                  <span>(42)</span>
                </div>
                <div className="item-features">
                  <span className="item-feature"><i className="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" className="btn">Réserver</a>
              </div>
            </div>

            {/* Item 3 */}
            <div className="item-card" data-aos="fade-up" data-aos-delay="200">
              <div className="item-tag">Nouveau</div>
              <img src={Velo} alt="Vélo électrique" className="item-img" />
              <div className="item-details">
                <h3 className="item-title">Vélo électrique Decathlon</h3>
                <div className="item-location"><i className="fas fa-map-marker-alt"></i> Marseille, 13001</div>
                <div className="item-price">25€ <span>/ jour</span></div>
                <div className="item-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'grey' }} />
                  <span>(12)</span>
                </div>
                <div className="item-features">
                  <span className="item-feature"><i className="fas fa-check"></i> Livraison possible</span>
                  <span className="item-feature"><i className="fas fa-shield-alt"></i> Assurance</span>
                </div>
                <a href="#" className="btn">Réserver</a>
              </div>
            </div>
            <div className="text-center" data-aos="fade-up">
              <a href="#" className="btn">Voir plus d'objets</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ca marche */}
      <section className="section section-dark" id="how">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Comment ça marche</h2>
            <p>Un processus simple et sécurisé en quelques étapes</p>
          </div>
          <div className="how-it-works">
            <div className="step" data-aos="fade-right">
              <div className="step-number">1</div>
              <div className="connector"></div>
              <div className="step-content">
                <h3>Trouvez</h3>
                <p>Recherchez parmi des milliers d'objets disponibles près de chez vous en quelques clics.</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="100">
              <div className="step-number">2</div>
              <div className="connector"></div>
              <div className="step-content">
                <h3>Réservez</h3>
                <p>Sélectionnez vos dates et effectuez votre réservation en toute simplicité.</p>
              </div>
            </div>
            <div className="step" data-aos="fade-right" data-aos-delay="200">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Profitez</h3>
                <p>Récupérez l'objet et profitez-en pendant la durée souhaitée avant de le retourner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descriptif */}
      <section className="section section-light" id="benefits">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Pourquoi M.A Location ?</h2>
            <p>Découvrez les avantages de notre plateforme de location entre particuliers</p>
          </div>
          <div className="benefits">
            <div className="benefit" data-aos="zoom-in">
              <div className="benefit-icon">
                <i className="fas fa-euro-sign"></i>
              </div>
              <h3>Économisez</h3>
              <p>Louez à moindre coût au lieu d'acheter. Rentabilisez vos objets en les proposant à la location.</p>
            </div>
            <div className="benefit" data-aos="zoom-in" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Écologique</h3>
              <p>Réduisez votre empreinte carbone en partageant les ressources au lieu de surconsommer.</p>
            </div>
            <div className="benefit" data-aos="zoom-in" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Sécurisé</h3>
              <p>Système de vérification des utilisateurs et assurance pour les objets loués.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section section-purple" id="testimonials">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Témoignages</h2>
            <p>Ce que disent nos utilisateurs</p>
          </div>
          <div className="testimonials-container" data-aos="fade-up">
            <div className="testimonials-slider">
              <div className="testimonial">
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    J'ai pu louer un appareil photo pour mon voyage sans avoir à investir dans du matériel coûteux. Le processus était simple et le propriétaire très sympathique !
                  </div>
                </div>
                <div className="testimonial-author">
                  <img src={Cliente} alt="Marie D." className="author-img" />
                  <div className="author-name">Marie D.</div>
                  <div className="author-info">Paris</div>
                </div>
              </div>
            </div>
            <div className="testimonial-controls">
              <div className="testimonial-dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau de DL */}
      <section className="cta">
        <div className="container" data-aos="fade-up">
          <h2>Prêt à partager ?</h2>
          <p>Rejoignez notre communauté et commencez à louer ou proposer des objets dès maintenant.</p>
          <div className="cta-buttons">
            <a href="#" className="btn">S'inscrire gratuitement</a>
            <a href="#" className="app-badge">
              <span>Télécharger sur</span>
              <strong>App Store</strong>
            </a>
            <a href="#" className="app-badge">
              <span>Télécharger sur</span>
              <strong>Google Play</strong>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Questions fréquentes</h2>
            <p>Tout ce que vous devez savoir sur M.A Location</p>
          </div>
          <div className="faq" data-aos="fade-up">
            <div className="faq-item">
              <div className="faq-question">Comment fonctionne l'assurance ?</div>
              <div className="faq-answer">
                <p>Tous les objets loués sur M.A Location sont couverts par notre assurance partenaire. Elle protège contre les dommages accidentels, le vol et la perte pendant la durée de la location. Une franchise peut s'appliquer selon la valeur de l'objet.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Comment sont gérés les paiements ?</div>
              <div className="faq-answer">
                <p>Les paiements sont sécurisés et traités via notre plateforme. L'argent est versé au propriétaire 24h après le début de la location pour garantir la sécurité des deux parties.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">Que faire en cas de problème avec un objet loué ?</div>
              <div className="faq-answer">
                <p>En cas de problème, contactez immédiatement le propriétaire via notre messagerie. Si le problème persiste, notre service client est disponible 7j/7 pour vous aider à résoudre la situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3> M.A Location</h3>
              <p>La plateforme de location entre particuliers qui rend tout louable pour tous, partout en France.</p>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Liens utiles</h3>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Comment ça marche</a></li>
                <li><a href="#">Devenir loueur</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Nous contacter</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Catégories</h3>
              <ul>
                <li><a href="#">Électronique</a></li>
                <li><a href="#">Outils</a></li>
                <li><a href="#">Véhicules</a></li>
                <li><a href="#">Sports & Loisirs</a></li>
                <li><a href="#">Maison & Jardin</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>Recevez nos actualités et offres spéciales</p>
              <form className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Votre email" />
                <button type="submit" className="newsletter-btn"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>

          <div className="copy">
            <p>&copy; 2025 M.A Location - Tous droits réservés</p>
          </div>
        </div>
      </footer >

      {/* Pop-up de reservation */}
      <div className="modal" id="reservationModal">
        <div className="modal-content">
          <button className="close-modal">&times;</button>
          <h2 className="reservation-title">Réserver cet objet</h2>
          <div className="form-header">
            <img src="/api/placeholder/160/160" alt="Objet" />
            <div className="form-header-info">
              <h3>Canon EOS 5D Mark IV</h3>
              <p>45€ / jour</p>
            </div>
          </div>
          <form className="reservation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="start-date">Date de début</label>
                <input type="date" id="start-date" required />
              </div>
              <div className="form-group">
                <label htmlFor="end-date">Date de fin</label>
                <input type="date" id="end-date" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message pour le propriétaire (optionnel)</label>
              <textarea id="message" placeholder="Présentez votre projet, posez vos questions..."></textarea>
            </div>
            <div className="form-check">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">J'accepte les conditions générales d'utilisation et la politique de confidentialité</label>
            </div>
            <button type="submit" className="btn btn-full">Réserver maintenant</button>
          </form>
        </div>
      </div>
    </div>
  )
}