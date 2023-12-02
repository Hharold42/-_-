import { useState } from "react";

const AddClient = ({ open, setClients, setOpen = () => {} }) => {
  const [data, setData] = useState({
    fio: "",
    passport: "",
    phone: "",
  });

  const setDef = () =>
    setData({
      fio: "",
      passport: "",
      phone: "",
    });

  return (
    open && (
      <div
        className="absolute w-full h-full top-0 bg-[#00000065] items-center justify-center flex"
        onClick={setOpen}
      >
        <div
          className="bg-white flxcol rounded-xl px-4 py-2 mx-8 my-16 w-[40%]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <label className=" font-bold text-lg">Добавить клиента</label>
          <div className="flxcol mx-4">
            <span className=" font-semibold text-base">ФИО</span>
            <input
              className="myInput"
              type="text"
              value={data.fio}
              onChange={(e) => {
                setData((prev) => ({ ...prev, fio: e.target.value }));
              }}
            />
          </div>
          <div className="flxcol mx-4">
            <span className=" font-semibold text-base">Пасспорт</span>
            <input
              className="myInput"
              type="text"
              value={data.passport}
              onChange={(e) => {
                setData((prev) => ({ ...prev, passport: e.target.value }));
              }}
            />
          </div>
          <div className="flxcol mx-4">
            <span className=" font-semibold text-base">Номер телефона</span>
            <input
              className="myInput"
              type="text"
              value={data.phone}
              onChange={(e) => {
                setData((prev) => ({ ...prev, phone: e.target.value }));
              }}
            />
          </div>
          <button
            className="mySubmit"
            onClick={() => {
              setClients((prev = []) => {
                const last = prev[prev.length - 1];
                const newId = last.id + 1;

                return [...prev, { ...data, id: newId, bal: "0", dept: "0" }];
              });

              setDef();
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    )
  );
};

export default AddClient;
