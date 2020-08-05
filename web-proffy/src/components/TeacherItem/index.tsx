import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface ITeacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface ITeacherItem {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItem> = ({ teacher }) => {
  async function createNewConnection() {
    await api.post("connections", {
      proffy_user_id: teacher.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a
          target="_black"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
