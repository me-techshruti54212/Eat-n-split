import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import { useState } from "react";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 933375,
    name: "Aarushi",
    image: "https://i.pravatar.cc/48?u=933375",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 933376,
    name: "Anushree",
    image: "https://i.pravatar.cc/48?u=933376",
    balance: 0,
  },
];

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [friends, setfriends] = useState(initialFriends);
  const [selectedFriend, setselectedFriend] = useState(null);
  function handleShowAddFriend() {
    setisOpen((open) => !open);
    // setselectedFriend(null)
  }
  function addfriend(friend) {
    setfriends((friends) => [...friends, friend]);
    setisOpen(false);
  }
  function handleSelection(friend) {
    // setselectedFriend(friend);
    setselectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setisOpen(false);
  }
  function handleSplitBill(value) {
    setfriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />
          {isOpen && <FormAddFriend addfriend={addfriend} />}
          <Button onClick={handleShowAddFriend}>
            {isOpen ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            key={selectedFriend.id}
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
