"use client";

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
  function handleSubmitAuthor(formData: FormData) {
    console.log(formData.get("author"));
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
      </div>
    </div>
  );
}
