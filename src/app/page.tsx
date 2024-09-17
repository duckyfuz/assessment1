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
  return <div>Form goes here</div>;
}
