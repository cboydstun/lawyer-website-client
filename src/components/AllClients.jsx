import React from "react";

const AllClients = ({ clients }) => {
  const displayUsers = () => {
    return clients?.map((item) => (
      <tr key={item.id}>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {item.username}
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {item.password}
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {item.email}
        </td>
        <td style={{ border: "1px solid #ddd", padding: "8px" }}>
          {item.phoneNumber}
        </td>
      </tr>
    ));
  };
  return (
    <table style={{ width: "800px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Username
          </th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Password
          </th>
          <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
          <th style={{ border: "1px solid black", padding: "8px" }}>
            Phone Number
          </th>
        </tr>
      </thead>
      <tbody>{displayUsers()}</tbody>
    </table>
  );
};

export default AllClients;
