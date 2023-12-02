import React from "react";

const EditClient = ({ open, setOpen, data, setClients }) => {
  const changeProp = (propName, itemId) => (e) => {
    setClients((prev = []) => {
      return prev.map((target) => {
        if (target.id === itemId) {
          return { ...target, [propName]: e.target.value };
        }
        return target;
      });
    });
  };

  return (
    open && (
      <div
        className="absolute w-full h-full top-0 bg-[#00000065] items-center justify-center flex"
        onClick={setOpen}
      >
        <div
          className="bg-white flxcol rounded-xl px-4 py-2 mx-8 my-16 w-[50%]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <label className=" font-bold text-lg">Список клиентов</label>
          <table>
            <thead className=" [&>tr>th]:text-left">
              <tr>
                <th>ID</th>
                <th>ФИО</th>
                <th>Пасспорт</th>
                <th>Телефон</th>
              </tr>
            </thead>
            <tbody className=" [&>tr>td]:text-left">
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <input
                      type="text"
                      value={item.fio}
                      className="myInput"
                      onChange={changeProp("fio", item.id)}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      value={item.passport}
                      className="myInput"
                      onChange={changeProp("passport", item.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.phone}
                      className="myInput"
                      onChange={changeProp("phone", item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default EditClient;
