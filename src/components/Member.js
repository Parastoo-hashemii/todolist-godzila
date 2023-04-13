import { useState } from "react";
import useMember from "../hook/useMember";
import { Addmember } from "./AddMember";
import { CardMember } from "./CardMember";

export function Member() {
  const { memberList, setMemberList } = useMember();
  const [newMemberList, setNewMemberList] = useState(memberList);
  const HandellSearch = (e) => {
    setNewMemberList(
      memberList.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(e.target.value.trim().toLocaleLowerCase());
      })
    );
  };
  console.log(newMemberList);
  return (
    <>
      <input
        type="search"
        placeholder="Enter search element "
        id="search"
        onChange={HandellSearch}
      />
      <Addmember />
      <div className="container">
        <CardMember props={{ newMemberList, setNewMemberList }} />
      </div>
    </>
  );
}
