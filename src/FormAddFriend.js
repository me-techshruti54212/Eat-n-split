import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ addfriend }) => {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48?u=933372");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    addfriend(newFriend);

    setname("");
    setimage("https://i.pravatar.cc/48?u=933372");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🎎 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <label>🏞️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
