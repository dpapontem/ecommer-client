import { basePath, apiVersion } from "./config";

export function createSubject(data) {
  console.log("Esta es la data");
  console.log(data)
  const url = `${basePath}/${apiVersion}/createSubject`;
  /*  http://localhost:3977/api/v1/createSubject  */
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(params)
    /* Cuando se crea la asginatura se devuelve una objeto agisnatura_creado */
    return fetch(url, params)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        if (result.subject) {
        return {
            subject_creado: true,
            message: "asginatura creada correctamente",
        };
        }
        return {
        subject_creado: false,
        message: result.message,
        };
    })
    .catch((err) => {
        console.log("Este es el erro generado")
        console.log(err)
        return {
        subject_creado: false,
        message: err.message,
        };
    });
        
};

// pilas con lo del token talvez se deba pedir desede el back
export function getAsignatures(token){

    const url = `${basePath}/${apiVersion}/subject`;
    const params = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: token,
        },
    };
    return fetch(url, params)
        .then((response) => {
        return response.json();
        })
        .then((result) => {
        return result;
        })
        .catch((err) => {
        return err.message;
        });
};

// actualizar una asignatura
export function updateSubjects(token, subject, subjectId){

    const url = `${basePath}/${apiVersion}/updateSubjects/${subjectId}`;

    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify(subject)
    };
  
    return fetch(url, params)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        return err.message;
      });

};

export function deletSubject(token,subjectId){

    const url = `${basePath}/${apiVersion}/deletsubject/${subjectId}`;

    const params = {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        Authorization: token
        }
    };

    return fetch(url, params)
        .then(response => {
        return response.json();
        })
        .then(result => {
        return result.message;
        })
        .catch(err => {
        return err.message;
        });
};

// filtro por version
export function getVersionPiia(version){

    const url = `${basePath}/${apiVersion}/getVersionPiia/${version}`;
    const params = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        //Authorization: token,
        },
    };

    return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
};


//activas
export function getActiveSubjects(token, status) {
  const url = `${basePath}/${apiVersion}/activesubjects?active=${status}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
  };
  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}


// activar piia

export function activateSubject(token, subjectId, status) {
  const url = `${basePath}/${apiVersion}/activatesubject/${subjectId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      piaa_status: status
    })
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result.message;
    })
    .catch(err => {
      return err.message;
    });
}