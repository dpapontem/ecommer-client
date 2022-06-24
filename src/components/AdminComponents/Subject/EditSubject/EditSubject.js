import React, { useState, useEffect, useCallback } from "react";
import {
  Avatar,
  Form,
  Input,
  Select,
  Button,
  Row,
  Switch,
  Col,
  notification,
} from "antd";
import {RightOutlined } from "@ant-design/icons";
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/png/user.png";
import { updateSubjects } from "../../../../api/subject";
import { getAccessToken } from "../../../../api/auth";

import "./EditSubject.scss";

export default function EditSubjectForm(props) {
  const { subject, setIsVisibleModal, setReloadSubjects } = props;
  const [avatar, setAvatar] = useState(null);
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    setSubjectData({
        department:subject.department,
        academic_activity: subject.academic_activity,
        activity_code: subject.activity_code,
        number_credits: subject.number_credits,
        piaa_version: subject.piaa_version,
        piaa_status: subject.piaa_status, //por defecto
        file_number: subject.file_number,
        file_date: subject.file_date,
        theory_hours: subject.theory_hours,
        offsite_hours: subject.offsite_hours,
        hoursnon_attendance_reprovals: subject.hoursnon_attendance_reprovals,
        last_chance: subject.last_chance, // por defecto
        duration_semester: subject.duration_semester,
        practical_hours: subject.practical_hours,
        presential_teacher_hours: subject.presential_teacher_hours,
        maximum_quotas: subject.maximum_quotas,
        passing_score: subject.passing_score,
        weeks_duration: subject.weeks_duration
    });
  }, [subject]);

  console.log(subject)

  
  

  const updateSubject = () => {
    const token = getAccessToken();
    let subjectUpdate = subjectData;
    
    console.log("Los datos de edit",subjectData)

    if (
        !subjectUpdate.department || 
        !subjectUpdate.academic_activity ||
        !subjectUpdate.activity_code ||
        !subjectUpdate.number_credits ||
        !subjectUpdate.piaa_version || 
        
        !subjectUpdate.file_number||
        !subjectUpdate.file_date || 
        !subjectUpdate.theory_hours || 
        !subjectUpdate.offsite_hours ||  
        !subjectUpdate.hoursnon_attendance_reprovals ||  
        
        !subjectUpdate.duration_semester ||
        !subjectUpdate.practical_hours ||  
        !subjectUpdate.presential_teacher_hours ||  
        !subjectUpdate.maximum_quotas ||
        !subjectUpdate.passing_score || 
        !subjectUpdate.weeks_duration 
    ) {
      notification["error"]({
        message:
          "Todos los campos son obligatorios."
      });
      return;
    }
    updateSubjects(token, subjectUpdate, subject._id).then(result => {
        notification["success"]({
          message: result.message
        });
        setIsVisibleModal(false);
        setReloadSubjects(true);
    });
    
  };

  return (
    <div className="edit-user-form">
      
      <EditForm
        subjectData={subjectData}
        setSubjectData={setSubjectData}
        updateSubject={updateSubject}
      />
    </div>
  );
}



function EditForm(props) {
  const { subjectData, setSubjectData, updateSubject } = props;
  const { Option } = Select;

  return (
    <Form className="form-edit" onFinish={updateSubject}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Departamento"
              value={subjectData.department}
              onChange={e => setSubjectData({ ...subjectData, department: e.target.value })}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Actividad Academica"
              value={subjectData.academic_activity}
              onChange={e =>
                setSubjectData({ ...subjectData, academic_activity: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
            <Form.Item>
                <Input
                prefix={<RightOutlined />}
                placeholder="Codigo de la actividad"
                value={subjectData.activity_code}
                onChange={e =>
                    setSubjectData({ ...subjectData, activity_code: e.target.value })
                }
                />
            </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Numero de creditos"
              value={subjectData.number_credits}
              onChange={e =>
                setSubjectData({ ...subjectData, number_credits: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Version del PIAA"
              value={subjectData.piaa_version}
              onChange={e =>
                setSubjectData({ ...subjectData, piaa_version: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Fecha Documento"
              value={subjectData.file_date}
              onChange={e =>
                setSubjectData({ ...subjectData, file_date: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Horas teoricas"
              value={subjectData.theory_hours}
              onChange={e =>
                setSubjectData({ ...subjectData, theory_hours: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Horas no presenciales"
              value={subjectData.offsite_hours}
              onChange={e =>
                setSubjectData({ ...subjectData, offsite_hours: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>      

      <Row gutter={24}>
        <Col span={12}>
            <Form.Item>
                <Input
                prefix={<RightOutlined />}
                placeholder="Numero de fallas Permitidas"
                value={subjectData.hoursnon_attendance_reprovals}
                onChange={e =>
                    setSubjectData({ ...subjectData, hoursnon_attendance_reprovals: e.target.value })
                }
                />
            </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Semestres de duracion"
              value={subjectData.duration_semester}
              onChange={e =>
                setSubjectData({ ...subjectData, duration_semester: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>  

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Numero de Horas parcticas"
              value={subjectData.practical_hours}
              onChange={e =>
                setSubjectData({ ...subjectData, practical_hours: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Horas precensiales docente"
              value={subjectData.presential_teacher_hours}
              onChange={e =>
                setSubjectData({ ...subjectData, presential_teacher_hours: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

        <Row gutter={24}>
        <Col span={12}>
            <Form.Item>
                <Input
                prefix={<RightOutlined />}
                placeholder="Numero maximos de inscritos"
                value={subjectData.maximum_quotas}
                onChange={e =>
                    setSubjectData({ ...subjectData, maximum_quotas: e.target.value })
                }
                />
            </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Nota aprovatoria"
              value={subjectData.passing_score}
              onChange={e =>
                setSubjectData({ ...subjectData, passing_score: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Duracion en semanas"
              value={subjectData.weeks_duration}
              onChange={e =>
                setSubjectData({ ...subjectData, weeks_duration: parseInt(e.target.value) })
              }
            />
          </Form.Item>
        </Col>
          <Col span={12}>
          <Form.Item>
            <Input
              prefix={<RightOutlined />}
              placeholder="Codigo de acta"
              value={subjectData.file_number}
              onChange={e =>
                setSubjectData({ ...subjectData, file_number: e.target.value})
              }
            />
          </Form.Item>
        </Col>        
      </Row>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Asignatura
        </Button>
      </Form.Item>
    </Form>
  );
}