import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer class="bg-body-tertiary text-center">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/colin.marvin.16"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://x.com/EdwardMarvin12"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/colinmarvin_/"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/colin-marvin/"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{
              backgroundColor: "#333333",
            }}
            href="https://github.com/Colin-Marvin"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a class="text-body" href="https://mdbootstrap.com/">
          Click here for my personal portfolio!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
