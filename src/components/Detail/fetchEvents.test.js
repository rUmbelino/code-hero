import moxios from 'moxios';

import { fetchEvents } from './fetchEvents';

describe('fetchEvents', () => {
  const path = 'path.event/123';

  it('should successfully fetch events', async () => {
    moxios.stubRequest(path, { status: 200 });
    await fetchEvents(path);
  });
});
