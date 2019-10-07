import React, { useState, useEffect, useRef } from "react";
import { Select } from "antd";

const EditableUserName = ({ username, editedUsers, setEditedUsersParent }) => {
  const node = useRef();

  const [isEditing, setIsEditing] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [editedUserName, setEditedUserName] = useState(username);

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target)) {
        return;
      }
      if (!isDropDownVisible) {
        setIsEditing(false);
        const mappedEditedUsers = editedUsers.map(user => {
          if (user.username === username) {
            user = { ...user, username: editedUserName };
          }
          return user;
        });
        setEditedUsersParent(mappedEditedUsers);
      }
    };

    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, isDropDownVisible, editedUserName, editedUsers, username, setEditedUsersParent]);

  const handleOnClickEditing = () => {
    setIsEditing(true);
  };

  const handleOnChange = value => {
    setEditedUserName(value);
  };

  const handleDropDownVisible = () => {
    setIsDropDownVisible(true);
  };

  const handleOnSelect = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div ref={node} onClick={handleOnClickEditing}>
      {isEditing ? (
        <Select
          defaultValue={editedUserName}
          onChange={handleOnChange}
          onSelect={handleOnSelect}
          onDropdownVisibleChange={handleDropDownVisible}
        >
          <Select.Option value="Amy">Amy</Select.Option>
          <Select.Option value="Josh">Josh</Select.Option>
          <Select.Option value="Kim">Kim</Select.Option>
        </Select>
      ) : (
        editedUserName
      )}
    </div>
  );
};

export default EditableUserName;
