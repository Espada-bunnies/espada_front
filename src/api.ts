const url = 'https://espada-back-f7fe4675eff2.herokuapp.com/api/v1/users';

const api = {
  register: (body: FormData) => fetch(`${url}/register`, { method: 'POST', body }).then((res) => res.json()),
  login: (body: FormData) => fetch(`${url}/login`, { method: 'POST', body }).then((res) => res.json()),
};

export default api;
