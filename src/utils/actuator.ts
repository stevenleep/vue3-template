import { flat } from ".";

export type ActuatorWrapper = (...args: any[]) => any;

/**
 * flow
 *
 * Unlike Compose,
 * Flow only cares about the defined Flow execution process,
 * and does not care about whether the onion model is formed in the end
 *
 * @param args AnyFunction[]
 * @returns Your signature parameter or the result of your last Flow execution
 */
export function flow<Actuator extends Function>(...args: Actuator[]) {
  return <V>(params: V): V => {
    return args.reduce((prev, next) => {
      return next(prev);
    }, params);
  };
}

/**
 * flow-deep
 *
 * Unlike Flow, the parameters support multi -level nesting
 *
 * @param args AnyFunction[]
 * @returns Your signature parameter or the result of your last Flow execution
 */
export function flowDeep<Actuator extends Function>(...args: Actuator[]) {
  const flatFlows = flat(args);
  return <V>(params: V): V => {
    return flatFlows.reduce((prev, next) => {
      return next(prev);
    }, params);
  };
}
