import { useState, useEffect } from "react";
import Button from "./Button";
import Profile from "./Profile";
import { data } from "../data";

const UserProfile = () => {
  const [users, setUsers] = useState(data);
  const [usersCount, setUsersCount] = useState(0);

  //set birthday peoples
  useEffect(() => {
    const setBirthdayPeople = () => {
      const todayBirthDays = users.filter((user) => {
        return user;
      });
      setUsers(todayBirthDays);
      setUsersCount(todayBirthDays.length.toString());
    };
    setBirthdayPeople();
  }, []);

  // clear users
  const clearAll = () => {
    setUsers([]);
    setUsersCount(0);
  };
  
  return (
    <>
      <h1 className="birth_today-head">{usersCount} Birthdays Today</h1>
      {users.map((userProfile, index) => (
        <Profile profile={userProfile} key={index} userCount={usersCount} />
      ))}
      <Button text="Clear All" btnCls="primary-btn" ClearUser={clearAll} />
    </>
  );
};

export { UserProfile };
