import React from "react";
import { Table, Button } from "antd";
import EditableName from "./EditableName";
import EditableUserName from "./EditableUserName";

const MyTable = ({ users, editedUsers, setEditedUsersParent }) => {
  const handleOnClickCommit = () => {
    console.log(editedUsers);
    console.log(users);
  };

  const handleOnClickUndo = () => {
    console.log("hey im being undo'd");
    setEditedUsersParent(users);
  };

  return (
    <div>
      <Table
        dataSource={users}
        rowKey="name"
        rowClassName={(record, index) => "editable-row"}
      >
        <Table.Column
          title="name"
          dataIndex="name"
          render={(name, record) => {
            return (
              <div className="editable-cell-value-wrap">
                <EditableName
                  name={name}
                  editedUsers={editedUsers}
                  setEditedUsersParent={setEditedUsersParent}
                />
              </div>
            );
          }}
        />
        <Table.Column
          title="username"
          dataIndex="username"
          render={(username, record) => {
            return (
              <div className="editable-cell-value-wrapper">
                <EditableUserName
                  username={username}
                  editedUsers={editedUsers}
                  setEditedUsersParent={setEditedUsersParent}
                />
              </div>
            );
          }}
        />
        <Table.Column title="email" dataIndex="email" />
        <Table.Column title="website" dataIndex="website" />
      </Table>
      <Button onClick={handleOnClickUndo}>Undo</Button>
      <Button onClick={handleOnClickCommit}>Commit</Button>
    </div>
  );
};

export default MyTable;
