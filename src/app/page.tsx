"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

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
      console.log(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  })();
};

export default function Home() {
  const [authorList, setAuthorList] = useState<string[]>([]);

  function handleSubmitAuthor(formData: FormData) {
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

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>GCC Technical Assessment</h1>
      <div className={styles.authorContainer}>
        <form action={handleSubmitAuthor}>
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
    </div>
  );
}
