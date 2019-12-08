import React from 'react';
import styles from './NameTable.module.css';

function NameTable(props) {
  const { chars, stages } = props;
  const flexStyle = { flexBasis: `${100 / chars.length}%` };
  return (
    <div className={styles.root}>
      <ul className={styles.chars}>
        {chars.map((char, i) => (
          <li key={i} className={i % 2 ? styles.odd : ''} style={flexStyle}>
            <div>{char}</div>
          </li>
        ))}
      </ul>
      <div className={styles.stages}>
        {stages.map((stage, i) => (
          <ul key={i} className={styles.stage}>
            {stage.map((num, j) => (
              <li key={j} style={flexStyle}>
                {i > 0 && <div className={styles.shim} />}
                <div className={styles.num}>{num}</div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
export default NameTable;
