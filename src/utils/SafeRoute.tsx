import React from 'react';
import pick from 'lodash/pick';
import qs from 'qs';
import { Redirect, Route, withRouter, RouteComponentProps } from 'react-router';
// TODO: Figure out how to import this rather than require.
const xss = require('xss');

interface IProps extends RouteComponentProps<any> {
  path?: string;
  exact?: boolean;
  component?: any;
  allowedParams?: string[];
  render?: ({ staticContext, history }: any) => any;
}

type SafeQueryResult = {
  value: boolean;
  redirectPath?: string;
  newPath?: string;
};

export function getSafeRouting(
  search: string,
  pathname: string,
  allowedParams: string[] | undefined,
): SafeQueryResult {
  // there is no query string everything is groovy
  if (search.length === 0) return { value: true };

  const negativeResult: { value: boolean; redirectPath?: string } = {
    value: false,
    redirectPath: pathname,
  };

  // if there are allowed params associated with the route then check them.
  // otherwise return a negative result because they are trying to access the
  // route with a bad querystring
  if (allowedParams) {
    const searchObject: any = qs.parse(search.substr(1));
    const searchParams: string[] = Object.keys(searchObject);
    const cleanedParams: any = {};

    while (searchParams.length > 0) {
      const paramKey: string = searchParams.shift();
      const index: number = allowedParams.findIndex(
        (p: string): boolean => p === paramKey,
      );

      if (index < 0) {
        // if there is something that is on the query string that is not allowed just strip the query string
        // and redirect to the path.
        return negativeResult;
      } else {
        if (Array.isArray(searchObject[paramKey])) {
          cleanedParams[paramKey] = searchObject[paramKey].map(
            (param: string) => xss(param),
          );
        } else {
          cleanedParams[paramKey] = xss(searchObject[paramKey]);
        }

        const newSearch: string = `?${qs.stringify(cleanedParams, {
          indices: false,
        })}`;

        const value: boolean = true;
        // if the new search did some cleaning then put the new path in the result
        // else return true and render the route normally

        if (searchParams.length === 0) {
          if (newSearch !== search) {
            const newPath: string = `${pathname}${newSearch}`;
            return {
              value,
              newPath,
            };
          } else {
            return {
              value,
            };
          }
        }
      }
    }
  } else {
    return negativeResult;
  }
}

class SafeRoute extends React.PureComponent<IProps, any> {
  render() {
    const {
      location: { search, pathname },
      allowedParams,
    } = this.props;

    const safetyResult = getSafeRouting(search, pathname, allowedParams);

    if (!safetyResult.value) {
      return <Redirect push={false} to={safetyResult.redirectPath} />;
    } else {
      if (safetyResult.newPath) {
        return <Redirect push={false} to={safetyResult.newPath} />;
      } else {
        const useableProps = pick(this.props, [
          'exact',
          'path',
          'component',
          'render',
        ]);
        return <Route {...useableProps} />;
      }
    }
  }
}

export default withRouter(SafeRoute);
