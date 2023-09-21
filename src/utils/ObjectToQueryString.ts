import { stringify } from 'query-string';

interface IAsQuery {
  (obj: any, prefix?: string): string;
}

interface IAsSimpleQuery {
  (data: any): string;
}

interface IObjectToQueryString {
  // asQuery: IAsQuery;
  asSimpleQuery: IAsSimpleQuery;
}

const ObjectToQueryString: IObjectToQueryString = {
  // OData query string conversion
  /*asQuery: function(obj: any, prefix: string = null): string {
    return jsonToODataQueryString(obj, prefix);
  },*/

  // non-ODAta query
  asSimpleQuery: function (data: any): string {
    const clone: any = Object.assign({}, data);
    const keys: string[] = Object.keys(clone);

    // this is dealing with issue of arrays that look like this [""] stringify ignores them.
    keys.forEach((key: string) => {
      const item: any = clone[key];
      if (Array.isArray(item) && item.length > 0) {
        clone[key] = item.slice();
      }
    });
    const result: string = stringify(clone, { arrayFormat: 'none' });
    return result;
  },
};

export default ObjectToQueryString;
