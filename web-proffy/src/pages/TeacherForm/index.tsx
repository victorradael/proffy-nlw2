import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

interface IScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro.");
      });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas. "
        description="O primeiro passo é preencher esse formulário de inscrição. "
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome completo"
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              label="URL do avatar"
              name="avatar"
              type="text"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              type="text"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Selecione uma matéria"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciencias", label: "Ciencias" },
                { value: "Educacao Fisica", label: "Educacao Fisica" },
                { value: "Historia", label: "Historia" },
                { value: "Geografia", label: "Geografia" },
                { value: "Matematica", label: "Matematica" },
                { value: "Portugues", label: "Portugues" },
                { value: "Quimica", label: "Quimica" },
                { value: "Ingles", label: "Ingles" },
              ]}
            />
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    placeholder="Selecione um dia"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    name="subject"
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda" },
                      { value: "2", label: "Terca" },
                      { value: "3 ", label: "Quarta" },
                      { value: "4", label: "Quinta" },
                      { value: "5", label: "Sexta" },
                      { value: "6", label: "Sabado" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="até "
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante!" />
              Importante ! <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
