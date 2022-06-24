import React, { useState, useEffect } from "react";
import {
  Input,
  Switch,
  List,
  Button,
  Avatar,
  Modal as ModalAntd,
  notification,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FolderOutlined,
  FolderAddOutlined ,
  SearchOutlined
} from "@ant-design/icons";
import NoAvatar from "../../../../assets/img/png/pngwing_1.png";
import { activateSubject, deletSubject, getVersionPiia } from "../../../../api/subject";
import { getAccessToken } from "../../../../api/auth";
import EditSubjectForm from "../EditSubject";
import AddSubjectForm from "../AddSubject";
import Modal from "../../../Modal";
import { getAvatar} from "../../../../api/user";

const { confirm } = ModalAntd;

export default function ListSubjects(props) {
  /* page subject */
  const { subjectsActive, subjectsInactive, setReloadSubjects } = props;
  const [viewSubjectsActives, setViewSubjectsActives] = useState(true);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const [inputValue, setInputValue] = useState("")

  const addSubjectModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nueva asignatura");    
    setModalContent(
      <AddSubjectForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadSubjects={setReloadSubjects}
      />
    );
  };

  return (
    <div className="list-users">
      <div className="list-users__header">
        <div className="list-users__header-switch">
          <List.Item
            actions={[
              <Input
               placeholder="Filtrar version de PIIA"
               prefix={<SearchOutlined />} 
               allowClear
               style={{borderRadius: 15,}}
               onChange={(event) => console.log(getVersionPiia(event.target.value))}
               />,
              <Button type="primary" onClick={addSubjectModal} style={{borderRadius: 15,}}>
                <FolderAddOutlined  />
              </Button>,
              
              
            ]}
          >
            <List.Item.Meta
              title={
                <span>
                  {viewSubjectsActives ? "Activos" : "Inactivos"}
                </span>
              }
              avatar={
                <Switch
                  defaultChecked
                  onChange={() => setViewSubjectsActives(!viewSubjectsActives)}
                />
              }
            ></List.Item.Meta>
          </List.Item>
        </div>
      </div>

      {viewSubjectsActives ? (
        <SubjectsActive
          subjectsActive={subjectsActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
          setReloadSubjects={setReloadSubjects}
        />
      ) : (
        <SubjectsInactive
          subjectsInactive={subjectsInactive}
          setReloadSubjects={setReloadSubjects}
        />
      )}

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function SubjectsActive(props) {
  const {
    subjectsActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadSubjects,
  } = props;

  const editSubject = (subject) => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${subject.academic_activity ? subject.academic_activity : "..."} ${
        subject.activity_code ? subject.activity_code : "..."
      }`
    );
    setModalContent(
      <EditSubjectForm
        subject={subject}
        setIsVisibleModal={setIsVisibleModal}
        setReloadSubjects={setReloadSubjects}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={subjectsActive} //arreglo
      renderItem={(subject) => (
        <SubjectActive
          subject={subject}
          editSubject={editSubject}
          setReloadSubjects={setReloadSubjects}
        />
      )}
    />
  );
}

function SubjectActive(props) {
  const { subject, editSubject, setReloadSubjects } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (subject.avatar) {
      getAvatar(subject.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [subject]);

  const desactivateSubject = () => {
    const accesToken = getAccessToken();

    activateSubject(accesToken, subject._id, false)
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadSubjects(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };

  const showDeleteConfirm = () => {
    const accesToken = getAccessToken();

    confirm({
      title: "Eliminando usuario",
      content: `¿Estas seguro que quieres eliminar a ${subject.email}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletSubject(accesToken, subject._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadSubjects(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
      },
    });
  };

  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editSubject(subject)} style={{borderRadius: 15,}}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={desactivateSubject} style={{borderRadius: 15,}}>
          <FolderOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm} style={{borderRadius: 15,}}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                ${subject.academic_activity ? subject.academic_activity : "..."} 
                ${subject.activity_code ? subject.activity_code : "..."}
            `}
        description={subject.department}
      />
    </List.Item>
  );
}

function SubjectsInactive(props) {
  const { subjectsInactive, setReloadSubjects } = props;

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={subjectsInactive}
      renderItem={(subject) => (
        <SubjectInactive subject={subject} setReloadSubjects={setReloadSubjects} />
      )}
    />
  );
}

function SubjectInactive(props) {
  const { subject, setReloadSubjects } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (subject.avatar) {
      getAvatar(subject.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [subject]);

  const activateSubjectF = () => {
    const accesToken = getAccessToken();

    activateSubject(accesToken, subject._id, true)
      .then((response) => {
        notification["success"]({
          message: response,
        });
        setReloadSubjects(true);
      })
      .catch((err) => {
        notification["error"]({
          message: err,
        });
      });
  };

  const showDeleteConfirm = () => {
    const accesToken = getAccessToken();

    confirm({
      title: "Eliminando Asignatura",
      content: `¿Estas seguro que quieres eliminar a ${subject.academic_activity}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletSubject(accesToken, subject._id)
          .then((response) => {
            console.log(subject._id);
            notification["success"]({
              message: response,
            });
            console.log(subject._id);
            setReloadSubjects(true);
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          });
      },
    });
  };
  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={activateSubjectF}>
          <FolderOutlined />
        </Button>,
        <Button type="danger" onClick={showDeleteConfirm} className="botones">
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`
                  ${subject.academic_activity ? subject.academic_activity : "..."} 
                  ${subject.activity_code ? subject.activity_code : "..."}
              `}
        description={subject.department}
      />
    </List.Item>
  );
}