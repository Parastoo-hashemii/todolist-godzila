import { createContext, useEffect, useState } from "react";
import { getAllMember } from "../Api/Handellapi";

export const memberContext = createContext();

const MemberProvaider = ({ children }) => {
  const [memberList, setMemberList] = useState([]);

  useEffect(() => {
    getAllMember().then((data) => {
      setMemberList(data);
    });
  }, []);
  const deleteMember = (id) => {
    const temp = memberList.filter((member) => {
      if (member._id !== id) {
        return member;
      }
    });
    setMemberList(temp);
  };

  const addMember = (member) => {
    setMemberList([member, ...memberList]);
  };

  const editMember = (newmember) => {
    const temp = memberList.map((member) => {
      if (member._id === newmember._id) {
        member.age = newmember.age;
        member.linkedin = newmember.linkedin;
        member.github = newmember.github;
        member.language = newmember.language;
      }
      return member;
    });
    setMemberList(temp);
  };

  return (
    <memberContext.Provider
      value={{ memberList, addMember, setMemberList, deleteMember, editMember }}
    >
      {children}
    </memberContext.Provider>
  );
};
export default MemberProvaider;
