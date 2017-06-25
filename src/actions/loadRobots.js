/**
 * Created by dm on 6/24/17.
 */


export const LOAD_ROBOTS= 'LOAD_ROBOTS';

export function loadRobots(_payload) {


  const data = {};
  data.data = {};
  data.data.robots = _payload.robots;
  return {
    type: LOAD_ROBOTS,
    payload: data
  };

}
