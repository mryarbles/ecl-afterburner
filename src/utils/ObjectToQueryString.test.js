import ObjectToQuery from './ObjectToQueryString';

describe('utils.ObjectToQuery', () => {
  describe('asSimpleQuery', () => {
    it('should render page object correctly with additional data', () => {
      const data = {
        otherData: 'test',
        count: 10,
        sortBy: 'test',
        sortOrder: 'desc',
      };

      const queryString = ObjectToQuery.asSimpleQuery(data);

      expect(queryString).toBe(
        'count=10&otherData=test&sortBy=test&sortOrder=desc',
      );
    });

    it('should allow empty strings in array parameters', () => {
      const data = {
        otherData: [''],
        moreData: ['', 'test'],
        data: ['test', 'test2'],
      };

      const queryString = ObjectToQuery.asSimpleQuery(data);

      expect(queryString).toBe(
        'data=test&data=test2&moreData=&moreData=test&otherData=',
      );
    });

    it('should ignore empty arrays', () => {
      const data = {
        otherData: [],
        data: ['', 'test'],
      };

      const queryString = ObjectToQuery.asSimpleQuery(data);

      expect(queryString).toBe('data=&data=test');
    });

    it('should not encode array commas', () => {
      const data = {
        data: ['me, you and them', 'fred'],
      };

      const queryString = ObjectToQuery.asSimpleQuery(data);

      expect(queryString).toBe('data=me%2C%20you%20and%20them&data=fred');
    });
  });
});
