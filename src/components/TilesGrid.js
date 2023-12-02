// TilesGrid.js

import Tile from "./Tile";
import {
  IoMdPeople,
  IoMdPersonAdd,
  IoIosListBox,
  IoMdAnalytics,
  IoMdCreate,
  IoMdWallet,
  IoMdTime,
  IoMdCard,
  IoMdCash,
  IoMdFlag,
  IoMdNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";
import Clients from "./Clients";
import { useState } from "react";
import AddClient from "./AddClient";
import RedBills from "./RedBills";
import Placeholder from "./Placeholder";
import EditClient from "./EditClient";

const data = [
  {
    id: 0,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 1,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 2,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 3,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 4,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 5,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
  {
    id: 6,
    fio: "Пупкин Вася Петушков",
    bal: 11.23,
    dept: 23331.33,
    passport: "1234123456",
    phone: "+79999128723",
  },
];

const TilesGrid = () => {
  const [open, setOpen] = useState({
    cl: false,
    ca: false,
    rb: false,
    aio: false,
    ec: false,
  });
  const [clients, setClients] = useState(data);

  const changeOpen = (shrt) => () => {
    setOpen((prev) => ({ ...prev, [shrt]: !prev[shrt] }));
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 my-4">
        <Tile
          icon={<IoMdPeople size={48} />}
          title="Просмотр списка клиентов"
          clicjEv={changeOpen("cl")}
        />

        <Tile
          icon={<IoMdPersonAdd size={48} />}
          title="Добавление нового клиента"
          clicjEv={changeOpen("ca")}
        />
        <Tile
          icon={<IoIosListBox size={48} />}
          title="Управление счетами"
          clicjEv={changeOpen("rb")}
        />
        <Tile
          icon={<IoMdAnalytics size={48} />}
          title="Аналитика и отчеты"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdCreate size={48} />}
          title="Редактирование клиента"
          clicjEv={changeOpen("ec")}
        />
        <Tile
          icon={<IoMdWallet size={48} />}
          title="Управление кредитами"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdTime size={48} />}
          title="История транзакций"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdCard size={48} />}
          title="Заявка на кредитную карту"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdCash size={48} />}
          title="Управление займами"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdFlag size={48} />}
          title="Флаг"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdNotificationsOutline size={48} />}
          title="Уведомления"
          clicjEv={changeOpen("aio")}
        />
        <Tile
          icon={<IoMdSettings size={48} />}
          title="Настройки"
          clicjEv={changeOpen("aio")}
        />
      </div>
      <div>
        <Clients open={open.cl} data={clients} setOpen={changeOpen("cl")} />
        <AddClient
          open={open.ca}
          setClients={setClients}
          setOpen={changeOpen("ca")}
        />
        <RedBills
          open={open.rb}
          data={clients}
          setOpen={changeOpen("rb")}
          setClients={setClients}
        />
        <Placeholder open={open.aio} setOpen={changeOpen("aio")} />
        <EditClient
          setClients={setClients}
          open={open.ec}
          data={clients}
          setOpen={changeOpen("ec")}
        />
      </div>
    </div>
  );
};

export default TilesGrid;
