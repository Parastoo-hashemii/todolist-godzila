import { useContext } from "react";
import { memberContext } from "../context/memberContext";

const useMember = () => {
  const member = useContext(memberContext);
  return member;
};
export default useMember;
