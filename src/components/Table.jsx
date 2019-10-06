import React from "react";
import { Table } from "antd";
import EditableName from "./EditableName";
import EditableUserName from "./EditableUserName";

const MyTable = ({ users, editedUsers, setEditedUsersParent }) => {
  return (
    <Table dataSource={users} rowKey="name">
      <Table.Column
        title="name"
        dataIndex="name"
        render={(name, record) => {
          return (
            <EditableName
              name={name}
              editedUsers={editedUsers}
              setEditedUsersParent={setEditedUsersParent}
            />
          );
        }}
      />
      <Table.Column
        title="username"
        dataIndex="username"
        render={(username, record) => {
          return (
            <EditableUserName
              username={username}
              editedUsers={editedUsers}
              setEditedUsersParent={setEditedUsersParent}
            />
          );
        }}
      />
      <Table.Column title="email" dataIndex="email" />
      <Table.Column title="website" dataIndex="website" />
    </Table>
  );
};

export default MyTable;
