import React from 'react';

/**
 * Ciklusvezérlö komponens
 * @param {LoopProps} props - ciklusvezérlö
 * @return {ReactElement}
 * @example
 *  <Loop for={5}>
 *    {n => (
 *      <li key={n}>{n}</li>
 *    )}
 *  </Loop>
 *  <Loop forEach={array}>
 *    {(item, index) => (
 *      <li key={index}>{item}</li>
 *    )}
 *  </Loop>
 *  <Loop forIn={object}>
 *    {(value, key) => (
 *      <li key={key}>{key}: {value}</li>
 *    )}
 *  </Loop>
 */
export const Loop = function(props) {
  let items = [];
  if (props.for) {
    for (let i = 0; i < props.for; i++) {
      items.push(props.children(i));
    }
  }
  else if (props.forEach) {
    props.forEach.forEach(
      (item, index) => {
        items.push(props.children(item, index));
      }
    );
  }
  else if (props.forIn) {
    for (let key in props.forIn) {
      items.push(props.children(props.forIn[key], key));
    }
  }
  return <React.Fragment>{items}</React.Fragment>;
};

/**
 * HTML kód beszúrása
 * @param {object} props
 * @return {ReactElement}
 * @example
 *  <div><Html>{htmlCode}</Html></div>
 */
export const Html = function(props) {
  return <span dangerouslySetInnerHTML={{ __html: props.children }}></span>;
};

/**
 * Segédfüggvény class-ok hozzáadásához
 * @param {...string} classList - class-ok
 * @return {string} szóközökkel összefűzött lista
 * @example
 *  <div className={cx(styles.logo, styles.big, 'col-1')}>
 */
export const cx = function(...classList) {
  return classList.join(' ');
};
