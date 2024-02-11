import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_zVy8VnXK.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="container_header" data-astro-cid-3ef6ksr2> <h1 class="title" data-astro-cid-3ef6ksr2>maxuelmorillocuevas@gmail.com</h1> <div class="link-container" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Home</a> <a href="/projects" data-astro-cid-3ef6ksr2>Projects</a> <a href="/contact" data-astro-cid-3ef6ksr2>Contact</a> </div> </div> `;
}, "C:/Users/maxue/porfolio/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/maxue/porfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, title, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" data-astro-cid-vnzlvqnm><button data-astro-cid-vnzlvqnm>${title}</button></a> `;
}, "C:/Users/maxue/porfolio/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Description = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Description;
  return renderTemplate`${maybeRenderHead()}<div class="container_description" data-astro-cid-c3abghta> <div class="description" data-astro-cid-c3abghta> <h1 data-astro-cid-c3abghta>Maxuel Morillo Cuevas</h1> <h2 data-astro-cid-c3abghta>Full Stack Developer</h2> <p data-astro-cid-c3abghta>
Desarrollador fullstack apasionado por la creación de soluciones web
            eficientes y robustas. Comprometido con la innovación y listo para
            aportar a proyectos emocionantes.
</p> ${renderComponent($$result, "Button", $$Button, { "title": "Linkedin", "href": "https://www.linkedin.com/in/maxuel-morillo-cuevas/", "color": "#0A66C2", "data-astro-cid-c3abghta": true })} ${renderComponent($$result, "Button", $$Button, { "title": "Github", "href": "https://github.com/maxuel09", "data-astro-cid-c3abghta": true })} </div> <div class="img-profile" data-astro-cid-c3abghta> <!-- aqui ira la img --> <img class="profile" src="../src/image/foto_curriculums.jpg" alt="maxuel" data-astro-cid-c3abghta> </div> </div> `;
}, "C:/Users/maxue/porfolio/src/components/Description.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Description", $$Description, {})} </main> ` })}`;
}, "C:/Users/maxue/porfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/maxue/porfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, $$Layout as a, index as i };
