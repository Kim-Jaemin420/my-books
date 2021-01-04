import { Component } from 'react';
import axios from 'axios';

const AUTH_API_URL = 'https://api.marktube.tv/v1/me';

class AuthService extends Component {
  static async login(email, password) {
    const response = await axios.post(AUTH_API_URL, {
      email,
      password,
    });

    return response.data.token;
  }
}

export default AuthService;
