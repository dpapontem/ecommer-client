import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { createSubject} from "../../../../api/subject";
import { getAccessToken } from "../../../../api/auth";
import "./AddSubject.scss";

export default function EditSubject(props) {
  const { setIsVisibleModal, setReloadSubjects } = props;
  const [subjectData, setSubjectData] = useState({});

  const addSubject = (event) => {
    event.preventDefault();

    if (
        !subjectData.department || 
        !subjectData.academic_activity ||
        !subjectData.activity_code ||
        !subjectData.number_credits ||
        !subjectData.piaa_version ||         
        !subjectData.file_number||
        !subjectData.file_date || 
        !subjectData.theory_hours || 
        !subjectData.offsite_hours ||  
        !subjectData.hoursnon_attendance_reprovals ||    
        !subjectData.duration_semester ||
        !subjectData.practical_hours ||  
        !subjectData.presential_teacher_hours ||  
        !subjectData.maximum_quotas ||
        !subjectData.passing_score || 
        !subjectData.weeks_duration
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesToken = getAccessToken();
      console.log("Esta es la data envia para asignatura");
      console.log(subjectData)
      createSubject(subjectData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadSubjects(true);
          setSubjectData({});
        })
        .catch((err) => {
          console.log("fallo por que")
          console.log(err)
          notification["error"]({
            message: err,
          });
        });
    }
  };
  console.log(subjectData);

  return (
    
    <div className="add-user-form">
      <AddForm
        subjectData={subjectData}
        setSubjectData={setSubjectData}
        addSubject={addSubject}
      />
    </div>
  );
}


const AddForm = (props) => {
  const { subjectData, setSubjectData, addSubject } = props;
  const { Option } = Select;

  return (
    <Form className="form-add">
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
                setSubjectData({ ...subjectData, number_credits: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, piaa_version: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, theory_hours: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, offsite_hours: parseInt(e.target.value) })
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
                    setSubjectData({ ...subjectData, hoursnon_attendance_reprovals: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, duration_semester: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, practical_hours: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, presential_teacher_hours: parseInt(e.target.value) })
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
                    setSubjectData({ ...subjectData, maximum_quotas: parseInt(e.target.value) })
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
                setSubjectData({ ...subjectData, passing_score: parseInt(e.target.value) })
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
        <Button
          type="primary"
          htmlType="submit"
          className="btn-submit"
          onClick={addSubject}
        >
          Crear Asignatura
        </Button>
      </Form.Item>
    </Form>
  );
};