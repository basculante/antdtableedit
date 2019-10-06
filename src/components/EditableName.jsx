import React, { useState, useRef, useEffect } from "react";
import { Input } from "antd";

const EditableName = ({ name, editedUsers, setEditedUsersParent }) => {
  const node = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return;
      }

      setIsEditing(false);
      const mappedEditedUsers = editedUsers.map(user => {
        if (user.name === name) {
          user = { ...user, name: editedName };
        }
        return user;
      });
      setEditedUsersParent(mappedEditedUsers);
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, editedName, editedUsers, name, setEditedUsersParent]);

  const handleOnClickEdit = () => {
    setIsEditing(true);
  };

  const handleOnChange = e => {
    setEditedName(e.target.value);
  };

  return (
    <div ref={node} onClick={handleOnClickEdit}>
      {isEditing ? (
        <Input
          value={editedName}
          onChange={handleOnChange}
          style={{ width: "50%" }}
        />
      ) : (
        editedName
      )}
    </div>
  );
};

export default EditableName;
