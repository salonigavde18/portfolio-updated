"use client";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
export default function Project({ index, title, manageModal, link, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      passHref
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>Web Development</p>
      {/* Add a button that opens the project link */}
    </Link>
  );
}
