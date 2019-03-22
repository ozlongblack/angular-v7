import { pick } from 'lodash';

const reducer = (envs, at) => (acc, key) => ({
  ...acc,
  [key.slice(at)]: envs[key],
});

export default function (props, globalEnv) {
  if (!globalEnv.DEPLOY_ENVIRONMENT) {
    return pick(globalEnv, props);
  }

  const envs = pick(
    globalEnv,
    props.map(prop => `${globalEnv.DEPLOY_ENVIRONMENT}_${prop}`),
  );

  return Object
    .keys(envs)
    .reduce(reducer(envs, globalEnv.DEPLOY_ENVIRONMENT.length + 1), {});
}
