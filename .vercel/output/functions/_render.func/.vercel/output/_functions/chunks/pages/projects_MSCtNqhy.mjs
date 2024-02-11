import { c as createAstro, b as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_zVy8VnXK.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Button, a as $$Layout } from './index_QahSOF3u.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-aid3sr62> <img src="../src/image/carrucel.png" data-astro-cid-aid3sr62> <p class="title" data-astro-cid-aid3sr62>El panel del alumno</p> <p class="description" data-astro-cid-aid3sr62>
Una ruleta basada en una escuela para los alumnos <br data-astro-cid-aid3sr62>
Desarrollada con Html, CSS y JavaScript
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Ver", "href": "https://maxuel09.github.io/Ruleta-equipo-uno/", "data-astro-cid-aid3sr62": true })} </div> <div data-astro-cid-aid3sr62> <img src="../src/image/ecomerce.png" data-astro-cid-aid3sr62> <p class="title" data-astro-cid-aid3sr62>eCollectic</p> <p class="description" data-astro-cid-aid3sr62>
Conectar a una api fake para una tienda<br data-astro-cid-aid3sr62>
Desarrollada con React
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Ver", "href": "https://e-collectic-maxuel.vercel.app/", "data-astro-cid-aid3sr62": true })} </div> <div data-astro-cid-aid3sr62> <img src="../src/image/todo.png" data-astro-cid-aid3sr62> <p class="title" data-astro-cid-aid3sr62>Traffic Light</p> <p class="description" data-astro-cid-aid3sr62>
Una To-do list basada en un semaforo simple<br data-astro-cid-aid3sr62>
Desarrollada con Html, CSS/Boostrap y JavaScript
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Ver", "href": "https://maxuel09.github.io/to-list-semaphone/src/index.html", "data-astro-cid-aid3sr62": true })} </div> <div data-astro-cid-aid3sr62> <img src="../src/image/Landing-rust.png" data-astro-cid-aid3sr62> <p class="title" data-astro-cid-aid3sr62>Landing Page-Rust</p> <p class="description" data-astro-cid-aid3sr62>
Una Landing Page basada en Rust con el framework Yew <br data-astro-cid-aid3sr62>
Desarrollada con Yew/Rust, Webensamble y JavaScript
</p> </div> ` })} `;
}, "C:/Users/maxue/porfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/maxue/porfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
