import { AudioLines, Facebook, Globe, Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-primary font-size-3xl font-bold text-xl">
          <h1>E-Wartawan Pelalawan</h1>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Tentang{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Kontak{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Berita{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Bantuan{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Media{" "}
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-primary"
              href="#"
            >
              {" "}
              Kebijakan{" "}
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              
              <Facebook className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Youtube</span>
              <Youtube className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Website</span>
              <Globe className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Radio</span>
              <AudioLines className="w-6 h-6" />
            </a>
          </li>
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
