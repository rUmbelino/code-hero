import React, { useEffect, useState } from 'react';
import { fetchEvent } from './fetchEvent';

export const Event = ({ resourceURI }) => {
  const [event, setEvent] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await fetchEvent(resourceURI);
      setEvent(response);
    }
    fetchData();
  }, [resourceURI]);

  console.log(event);

  return <div>Event</div>;
};
