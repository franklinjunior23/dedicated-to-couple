import React, { useState } from "react";
import { handleCreateMessage } from "../service/handle-create-message";
import { Message } from "../message";

function FormCreateMessage() {
  const [userInfo, setuserInfo] = useState<Message>({
    name: "",
    message: "",
  });
  const [urlMessage, seturlMessage] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setuserInfo({ ...userInfo, [name]: value });
  }

  function handleClickCreate() {
    if (userInfo.name == "" || userInfo.message == "") {
      alert("Por favor completa los campos");
      return;
    }
    const url = handleCreateMessage({
      name: userInfo.name,
      message: userInfo.message,
    });
    seturlMessage(url);
  }

  const stylesInput = "border py-2 px-2 w-[400px] border-white rounded-md";
  return (
    <main className="w-full h-screen bg-black text-white flex items-center justify-center flex-col">
      <h3 className="text-3xl font-bold">
        Escribe un mensaje lindo para tu pareja
      </h3>
      <section className="mt-10 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="Escribe el nombre de la persona"
          className={stylesInput}
        />
        <textarea
          name="message"
          value={userInfo.message}
          onChange={handleChange}
          className={`${stylesInput} h-[300px] relative`}
          placeholder="Escribe un mensaje para esa persona"
          id=""
        ></textarea>
        <button
          className="bg-blue-700 py-2 rounded-xl font-bold"
          onClick={handleClickCreate}
        >
          Crear Mensajito
        </button>
      </section>
      <section>
        {urlMessage !== "" && (
          <div className="flex justify-between">
            <span>{urlMessage}</span>
            <button
              className="bg-white w-4"
              onClick={() => navigator.clipboard.writeText(urlMessage)}
            >
              Copiar
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default FormCreateMessage;
