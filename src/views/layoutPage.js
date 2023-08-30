import { html } from '../../node_modules/lit-html/lit-html.js';
import { toggleMenu } from '../services/user.js';

export const layoutTemplate = (user, content) => html`
<header>
  <nav>
  ${user ? html`
    <div class="hero" id="user-btns">
      <i @click=${toggleMenu} class="fa-regular fa-user user-pic"></i>

      <div class="sub-menu-wrap" id="subMenu">
        <div class="sub-menu">
          <div class="user-info">
            <h1>${user.username}</h1>
          </div>
          <hr>
          <a href="/logout" class="sub-menu-link">
            <p>Logout</p>
          </a>
        </div>
      </div>
    </div>`
    : html`
    <div class="hero" id="user-btns">
      <i @click=${toggleMenu} class="fa-regular fa-user user-pic"></i>

      <div class="sub-menu-wrap" id="subMenu">
        <div class="sub-menu">
          <div class="user-info">
            <h1>Guest</h1>
          </div>
          <hr>
          <a href="/login" class="sub-menu-link">
            <p>Login</p>
          </a>
          <a href="/register" class="sub-menu-link">
            <p>Register</p>
          </a>
        </div>
      </div>
    </div>` }
    <div id="logo" class="nav-logo">
      <a href="/"><img src="./src/assets/images/logo new 2023 transperant cutted.png" alt="no-image"></a>
    </div>
    <ul class="nav-bar">
      <li class="nav-link">
        <a href="/">HOME</a>
      </li>
      <li id="gallery" class="nav-link gallery">
        <a href="/gallery">GALLERY</a>
      </li>
      <li class="nav-link booking">
        <a href="/booking">BOOKING</a>
      </li>
      ${user && user.username == 'admin' ? html`
      <li class="nav-link">
        <a href="/upload">UPLOAD</a>
      </li>`
      : html`
      <li class="nav-link">
        <a href="/contact">CONTACT</a>
      </li>`}
    </ul>
  </nav>
</header>
<main class="main" id="main">
  <div class="main__content" id="content">${content}</div>
</main>
<footer class="footer">
  <div class="links">
    <a class="links__instagram" href="https://www.instagram.com/urban.tattoo.sofia/"><i id="instagram"
        class="fa-brands fa-instagram links__instagram--icon"></i></a>
    <a class="links__facebook" href="https://www.facebook.com/urban.tattoo.sofia/"><i id="facebook"
        class="fa-brands fa-square-facebook links__facebook--icon"></i></a>
    <a class="links__google" href="https://g.page/r/CbxBJYKl-n-wEB0"><i id="google"
        class="fa-brands fa-square-google-plus links__google--icon"></i></a>
  </div>
  <div class="copyright">
    © 2023 Copyright:
    <a class="copyright__author" href="https://www.linkedin.com/in/viktor-stefanov-953047263/">Viktor Stefanov</a>
  </div>
</footer>
`;



