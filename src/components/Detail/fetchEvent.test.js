import moxios from 'moxios';

import { fetchEvent } from './fetchEvent';
import { event } from '../../utils/mock';

describe('fetchEvent', () => {
  const resourceURI = 'path.event/123';

  it('should successfully fetch events', async () => {
    moxios.stubRequest(resourceURI, { status: 200, response: { data: { results: [event] } } });
    const response = await fetchEvent(resourceURI);

    expect(response).toHaveProperty('title');
    expect(response).toHaveProperty('thumbnail');
    expect(response).toHaveProperty('description');
  });
});
