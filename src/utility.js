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
}
