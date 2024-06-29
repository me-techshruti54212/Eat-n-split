import React, { useState } from "react";
import Button from "./Button";
const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setbill] = useState("");
  const [paidbyUser, setpaidbyUser] = useState("");
  const [whoisPaying, setwhoisPaying] = useState("user");
  const paidbyFriend = bill ? bill - paidbyUser : null;
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidbyUser) return;

    onSplitBill(whoisPaying === "user" ? paidbyFriend : -paidbyUser);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />

      <label>👨‍🍼Your expense</label>
      <input
        type="text"
        value={paidbyUser}
        onChange={(e) =>
          setpaidbyUser(
            Number(e.target.value) > bill ? paidbyUser : Number(e.target.value)
          )
        }
      />

      <label>👨‍👨{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidbyFriend} />

      <label>😄Who is paying the bill</label>
      <select
        value={whoisPaying}
        onChange={(e) => setwhoisPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
