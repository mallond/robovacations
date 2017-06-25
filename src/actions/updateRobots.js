/**
 * Created by dm on 6/24/17.
 *
 * ACTION
 *
 */

export const UPDATE_ROBOTS= 'UPDATE_ROBOTS';

export function updateRobots(_payload) {

  const data = {};
  data.data = {};
  data.data.robots = _payload.robots;

  return {
    type: UPDATE_ROBOTS,
    payload: data
  };

}
