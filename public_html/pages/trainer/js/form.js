const form = document.querySelector("#formElem");
const name = document.querySelector("#fname");
const email = document.querySelector("#email");

const nameFromLS = localStorage.getItem("name");
const emailFromLS = localStorage.getItem("email");

const sendMessage = "https://api.sendpulse.com/smtp/emails";
const getToken = "https://api.sendpulse.com/oauth/access_token";

const data = {
  email: {
    // html: "PHA+VGhhbmsgeW91IGZvciBjb250YWN0aW5nIEV4dGVuZCBTdXBwb3J0cywgd2UgcmVjZWl2ZWQgeW91ciBtZXNzYWdlIGFuZCB3aWxsIGNvbnRhY3QgeW91IHNob3J0bHkgLgpSZWdhcmRzICwKRXh0ZW5kIFN1cHBvcnRzIHRlYW08L3A+",
    html: "PHA+RXhhbXBsZSB0ZXh0PC9wPg==", 
    text: "Example text",
    subject: "CV",
    from: {
      name: "extendsupports",
      email: "office@extendsupports.com",
    },
    to: [
      {
        name: `${name}`,
        email: `${email}`,
      },
    ],
  },
};

const DATA = {
  grant_type: "client_credentials",
  client_id: "bdd7c5997d23ee882e6372f9951ee3eb",
  client_secret: "59b8946f80112ef4d1207162a17fe2dd",
};

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   if (name.value && email.value) {
//     localStorage.setItem("name", String(name.value));
//     localStorage.setItem("email", String(email.value));
//   }

//   let response = await fetch(getToken, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(DATA),
//   });
//   let { access_token: token } = await response.json();
//   console.log(token);

//   const message = await fetch(sendMessage,  {
//     method: "POST",
//     body: data,
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization":`Bearer ${token}`
//     },
//   })

//   console.log(message);
//   // try {
//   //     const response = await fetch(url, {
//   //       method: 'POST',
//   //       body: data,
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       }
//   //     });
//   //     const json = await response.json();
//   //     console.log('Успех:', JSON.stringify(json));
//   //   } catch (error) {
//   //     console.error('Ошибка:', error);
//   //   }
// });

// "tel on which acc is registreted 380999831269
// login : office@extendsupports.com
// pass : RFHNBYRF45678rfhnbyrf"
