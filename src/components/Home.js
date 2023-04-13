import { Addtask } from "./Addtask";
import { Tabel } from "./Tabel";

export function Home() {
  const coloumn = [
    { heading: "taskes", value: "title" },
    { heading: "explain", value: "explain" },
    { heading: "users", value: "user" },
    { heading: "action" },
  ];

  return (
    <>
      <Addtask />
      <Tabel column={coloumn} />
    </>
  );
}
