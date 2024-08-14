import styles from "./SingleNoteArea.module.css";

export const SingleNoteArea = ({ note }) => {
  return (
    <div className={styles.container}>
      <div className={styles.actual_note}>{note.content}</div>
      <div className={styles.date_time_area}>
        <span>{note.date}</span>
        <span>●</span>
        <span>{note.time}</span>
      </div>
    </div>
  );
};
