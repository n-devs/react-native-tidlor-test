/**
 * Mocking client-server processing
 */
 import _users from './users'

// const _users = [{
//       "id": 0,
//       "firstName": "ณัฐภัทร",
//       "lastName": "เพียสังกะ",
//       "IDNumber": "1-4099-xxxxx-xx-x",
//       "phoneNumber": "080-xxx-xxxx"
// }]

const TIMEOUT = 100
const MAX_CHECKOUT = 2 // max different items

export const api = {
      getUsers: async () => {
            return _users
      },

      createUsers: async (data) => {
            try {
                  // _users = data

                  return data
            } catch (err) {
                  return console.error(err)
            }
      },
      updateUsers: async (data) => {
            try {
                  // _users = data

                  return data
            } catch (err) {
                  return console.error(err)
            }
      },
      deleteUsers: async (id) => {
            try {
                  delete _users[id]

                  return _users
            } catch (err) {
                  return console.error(err)
            }
      }
}