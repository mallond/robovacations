/**
 * Created by dm on 6/24/17.
 */


export const UPDATE_ROBOTS= 'UPDATE_ROBOTS';

export function updateRobots(_payload) {
  console.log('action update robots:', _payload);

  const data = {};
  data.data = {};
  data.data.robots = _payload.robots;
  //data.data.robots = [ ...arr, newEntry ]

  return {
    type: UPDATE_ROBOTS,
    payload: data
  };

}
