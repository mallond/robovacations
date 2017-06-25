import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function max(data) {
  return _.max(data);
}

export default (props) => {
  return (
    /*jshint ignore:start */
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{max(props.data)} {props.units}</div>
    </div>
    /*jshint ignore:end */
  );
};
