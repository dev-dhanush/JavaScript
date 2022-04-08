import { gql } from 'apollo-boost';

//Mutations allow you to modify server-side data, and it also returns an object based on the operation performed. It can be used to insert, update, or delete data. Dgraph automatically generates GraphQL mutations for each type that you define in your schema
export const GET_USERS = gql`
  {
    getUsers {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const VIEW_USERS = gql`
  query ($id: Int){
    getUserInfo(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const ADD_USER = gql`
    mutation($name: String, $email: String, $job_title: String) {
    createUser (name: $name, email: $email, job_title: $job_title)
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $job_title: String) {
    updateUserInfo (id: $id, name: $name, email: $email, job_title: $job_title)
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int) {
    deleteUser(id: $id)
  }
`
