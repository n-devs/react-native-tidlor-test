/**
 * Mocking client-server processing
 */
import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' }
});

export const api = {
  getUsers: async () => {
    try {
      const users = await axios.get('users')

      return users.data
    } catch (err) {
      return console.error(err)
    }
  },
  createUsers: async (data) => {
    try {
      const create_user = await axios.post('user', {
        data
      })

      return create_user.data
    } catch (err) {
      return console.error(err)
    }
  },
  updateUsers: async (data) => {
    try {
      const update_user = await axios.put(`user/${data.id}`, {
        data
      })

      return update_user.data
    } catch (err) {
      return console.error(err)
    }
  },
  deleteUsers: async (data) => {
    try {
      console.log(data);
      await axios.delete(`user/${data}`)

      return data
    } catch (err) {
      return console.error(err)
    }
  }
}
