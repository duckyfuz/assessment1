import React from "react";
import { User } from "../../helpers/types";

import styles from "./UserDetail.module.css";

export const UserDetail = ({ user }: { user: User }) => {
  return (
    <div className={styles.userDetailContainer}>
      <div className={styles.detailContainer}>
        <h2>{user.name}</h2>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>
          <a
            href={`http://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </div>
      <div className={styles.detailContainer}>
        <h3>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          <strong>Latitude:</strong> {user.address.geo.lat}
        </p>
        <p>
          <strong>Longitude:</strong> {user.address.geo.lng}
        </p>
      </div>
      <div className={styles.detailContainer}>
        <h3>Company</h3>
        <p>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catchphrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {user.company.bs}
        </p>
      </div>
    </div>
  );
};
