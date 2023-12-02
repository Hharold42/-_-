const RedBills = ({ open, setOpen, data, setClients }) => {
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
                <th>Баланс</th>
                <th>Пасспорт</th>
              </tr>
            </thead>
            <tbody className=" [&>tr>td]:text-left">
              {data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.fio}</td>
                  <td>
                    <input
                      className="myInput"
                      type="text"
                      value={item.bal}
                      onChange={(e) => {
                        setClients((prev = []) => {
                          return prev.map((target) => {
                            if (target.id === item.id) {
                              return { ...target, bal: e.target.value };
                            }
                            return target;
                          });
                        });
                      }}
                    />
                  </td>
                  <td>____ __{item.passport.substr(6, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default RedBills;
