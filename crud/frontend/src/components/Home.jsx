import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Crud app</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Yash</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
