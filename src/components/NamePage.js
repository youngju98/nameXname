/* eslint-disable jsx-a11y/anchor-is-valid, no-restricted-globals,
react/no-array-index-key, react/jsx-props-no-spreading, no-bitwise */
import React, {
  useMemo, useState, useEffect,
} from 'react';
import { interpolateRdYlBu, hsl } from 'd3';
import Octicon from 'react-octicon';
import { getScore, shuffle } from './util';
import styles from './NamePage.module.css';
import NameTable from './NameTable';

const getAttrFromClosest = (source, attrName) => {
  const target = source.getAttribute(attrName) ? source : source.closest(`[${attrName}]`);
  if (target) {
    return target.getAttribute(attrName);
  }
  return null;
};

const compareScore = (a, b) => {
  if (a.score === b.score) {
    return 0;
  }
  return a.score < b.score ? 1 : -1;
};

function NamePage({ nameData, myName }) {
  const text = useMemo(() => {
    let data = shuffle(nameData)
      .slice(0, 12)
      .join(' ');
    if (data.indexOf(myName) < 0) {
      data += ` ${myName}`;
    }
    return data;
  }, [nameData, myName]);

  const cases = useMemo(() => {
    const all = text
      .split(/[\n\s,]/)
      .map((e) => e.replace(/\s+/g, ''))
      .filter((e) => e && e.length > 1 && e.length < 5 && e.search(/[^ㄱ-ㅎ가-힣]/) === -1);
    const items = [];
    for (let x = 0; x < all.length; x += 1) {
      for (let y = 0; y < x; y += 1) {
        const name1 = all[y];
        const name2 = all[x];
        const info1 = getScore(name1, name2);
        const info2 = getScore(name2, name1);
        items.push({
          id: Math.random()
            .toString(36)
            .substr(-7),
          names: [name1, name2],
          info1,
          info2,
          score1: info1.score,
          score2: info2.score,
          score: ~~((info1.score + info2.score) / 2),
        });
      }
    }
    items.sort(compareScore);
    return items;
  }, [text]);

  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (cases && cases.length > 0) {
      setSelected(cases[0]);
    } else {
      setSelected(null);
    }
    setQuery('');
  }, [cases]);

  const filtered = useMemo(() => {
    if (query) {
      return cases.filter((e) => e.names.join(',').search(query) !== -1);
    }
    return cases;
  }, [cases, query]);

  const handleCaseFocus = (event) => {
    const caseIndex = parseInt(getAttrFromClosest(event.target, 'data-case-index'), 10);
    if (selected !== filtered[caseIndex]) {
      setSelected(filtered[caseIndex]);
    }
  };

  const getColors = (value) => {
    const background = interpolateRdYlBu(1 - value / 100);
    const hsl1 = hsl(background);
    return {
      borderLeft: `10px solid ${background}`,
      background,
      color: hsl1.l < 0.7 ? '#fff' : '#000',
    };
  };

  const BASE = '가'.charCodeAt(0);

  Array(200)
    .fill(true)
    .map((e, i) => BASE + i)
    .map((i) => String.fromCharCode(i))
    .join('');

  return (
    <div className={styles.root}>
      <div className={styles.showcase} id="user-content-result">
        {cases.length > 1 && (
          <div className={styles.rank}>
            <ul>
              {filtered.map((e, i) => (
                <li
                  key={i}
                  data-case-index={i}
                  onFocus={handleCaseFocus}
                  onMouseOver={handleCaseFocus}
                  className={selected && selected.id === e.id ? styles.selected : ''}
                  style={getColors(e.score)}
                >
                  <div className={styles.num}>{e.score}</div>
                  <div className={styles.name}>
                    <div>
                      {e.names[0]}
                      {' x '}
                      {e.names[1]}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles.calc}>
          {selected && (
            <div>
              <div>
                <h1 className={styles.names}>
                  {selected.names[0]}
                  &nbsp;
                  <Octicon mega name="x" />
                  &nbsp;
                  {selected.names[1]}
                </h1>
              </div>
              <div>
                <div className={styles.formula}>
                  (
                  {' '}
                  {selected.score1}
                  {' '}
+
                  {' '}
                  {selected.score2}
                  {' '}
) / 2 =
                  {' '}
                  {selected.score}
                </div>
              </div>
              <div>
                <div>
                  <NameTable {...selected.info1} />
                </div>
                <div>
                  <NameTable {...selected.info2} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NamePage;
