"use client";

import React, { FormEvent, useState } from "react";
import { UserDetail } from "./components/UserDetail/UserDetail";

import { User } from "./helpers/types";
import styles from "./page.module.css";

export default function Home() {
  const [authorList, setAuthorList] = useState<string[]>([]);
  const [userList, setUserList] = useState<User[]>([]);

  function handleSubmitAuthor(even: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAuthor = formData.get("author");

    if (typeof newAuthor === "string" && newAuthor !== null) {
      setAuthorList((prevList) => {
        if (!prevList.includes(newAuthor)) {
          return [...prevList, newAuthor];
        }
        return prevList;
      });
    }
  }

  const fetchUserList = () => {
    (async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        setUserList(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>GCC Technical Assessment</h1>
      <div className={styles.authorContainer}>
        <form onSubmit={handleSubmitAuthor}>
          <label htmlFor="author">Author Name:</label>
          <input type="text" id="author" name="author" required />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.authorList}>
          {authorList.map((author) => (
            <p key={author}>{author}</p>
          ))}
        </div>
      </div>
      <div className={styles.userContainer}>
        <button onClick={fetchUserList}>Fetch from API</button>
        <div className={styles.userList}>
          {userList.map((user) => (
            <UserDetail key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
