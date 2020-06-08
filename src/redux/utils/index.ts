import { reduce, assoc } from 'ramda';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export default (base: any) =>
  reduce(
    (accum: any, type: any) => assoc(type, `${base}_${type}`)(accum),
    {}
  )([REQUEST, SUCCESS, FAILURE]);
