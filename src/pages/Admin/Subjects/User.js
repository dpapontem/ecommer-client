import React, { useState, useEffect } from "react";
import "./User.scss";
import { getActiveSubjects } from "../../../api/subject";
import { getAccessToken } from "../../../api/auth";
import ListSubjects from "../../../components/AdminComponents/Subject/ListSubject/ListSubject";

export default function Subjects() {
  const [subjectsActive, setSubjectsActive] = useState([]);
  const [subjectsInactive, setSubjectsInactive] = useState([]);
  const [reloadsubjects, setReloadSubjects] = useState(false);
  const token = getAccessToken();

  useEffect(() => {
    getActiveSubjects(token, true).then((response) => {
      setSubjectsActive(response.subjects);
    });
    getActiveSubjects(token, false).then((response) => {
      setSubjectsInactive(response.subjects);
    });
    setReloadSubjects(false);
  }, [token, reloadsubjects]);

  return (
    <div>
      <ListSubjects
        subjectsActive={subjectsActive}
        subjectsctive={subjectsInactive}
        setReloadSubjects={setReloadSubjects}
      />
    </div>
  );
}
