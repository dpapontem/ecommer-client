import React, {useState} from "react";
import {Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { singUpApi} from "../../../api/user";

import "./Registre.scss";

import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidations.js";

export default function RegistreForm(){

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState ({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) =>{

    if (e.target.name ==="privacyPolicy"){
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else{
      setInputs({
        ...inputs,
        [e.target.name] : e.target.value,
      });
    }
  };

  const inputValidation = (e) =>{
    console.log(formValid)

    const {type, name} = e.target;

    if (type === "email") {
      setFormValid({...formValid, [name] : emailValidation(e.target)});
    }
    if(type === "password"){
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target,6)})
    }
    
    if (type === "Checkbox"){
      setFormValid({ ...formValid, [name]: e.taarget.checked });
    }
  };

  const register = async (e) =>{
    e.preventDefault();
    console.log("Estoy en register");
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal){

      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
      console.log("Vacios");
    } else {
      
      if ( passwordVal !== repeatPasswordVal){
        notification["error"]({
          message: "Las constraseñas deben coincidir.",
        });
        console.log("LAs contraseñas son diferentes");
      }else {
        const result = await singUpApi(inputs);
        console.log(result)
        if (!result.user_creado){
          notification["error"]({
            message: result.message,
          });
        }else{
          notification["success"]({
            message: result.message,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {

    const inputs = document.getElementsByTagName("input");
    console.log("estoy reiniciando")

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");      
    }

    setInputs({
      email: "",
      password: "",
      repeatPassword:"",
      privacyPolicy: false,
    });

    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return(
    <Form className="registre-form" onChange={changeForm}>
      <Form.Item
      name="email"
      label=" "
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
      >
        <Input 
          prefix={<UserOutlined />}
          type = "email"
          name = "email"
          placeholder = "Correo electronico"
          className = "registre-form__input"
          onChange = {inputValidation}
          value = {inputs.email}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label=" "
        rules={[
          {
            required: true,
            message: 'Ingrese una contraseña con almenos 6 caracteres',
          },
        ]}
        
      >
        <Input 
          prefix={<LockOutlined />}
          type = "password"
          name = "password"
          placeholder = "Contraseña"
          className = "registre-form__input"
          onChange = {inputValidation}
          value = {inputs.password}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label=" "
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Confirme su contraseña',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Las contraseñas no coinciden!'));
            },
          }),
        ]}
      >
        <Input 
          prefix={<LockOutlined />}
          type = "password"
          name = "repeatPassword"
          placeholder = "Repetir Contraseña"
          className = "registre-form__input"
          onChange = {inputValidation}
          value = {inputs.repeatPassword}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar la politica de privacidad')),
          },
        ]}
      >
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
          He leído y acepto la politica de privacidad
        </Checkbox>
      </Form.Item>

      <Form.Item className="s">
        <Button 
          type="primary"
          onClick={register} className="buttons"
        >
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  )
};