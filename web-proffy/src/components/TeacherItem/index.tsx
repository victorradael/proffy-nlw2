import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/53879758?s=460&u=4658453ce742cba23ca4624949e8d4dd521f1513&v=4"
          alt="Victor Radael"
        />
        <div>
          <strong>Victor Radael</strong>
          <span>POO</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de POO.
        <br />
        <br />
        Apaixona por uma pessoa, ou sera que nao?
      </p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
