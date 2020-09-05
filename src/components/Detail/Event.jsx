import React from 'react';
import { fetchEvent } from './fetchEvent';

export class Event extends React.Component {
  state = {
    error: '',
    event: null,
    isLoading: true,
  };

  async componentDidMount() {
    try {
      const event = await fetchEvent(this.props.resourceURI);
      this.setState({ isLoading: false, event });
    } catch (error) {
      this.setState({ isLoading: false, error: 'Ocorreu um erro ao buscar o evento' });
    }
  }

  render() {
    const { isLoading, error, event } = this.state;

    if (isLoading) return <div>loading...</div>;

    if (error) return <h5 className="text-danger">{error}</h5>;

    const { title, thumbnail, description } = event;

    return (
      <div className="d-flex border-button w-100 pb-1 mb-1">
        <img src={thumbnail} alt={title} />
        <div className="ml-1">
          <h5 className="title">{title}</h5>
          <small className="description">{description}</small>
        </div>
      </div>
    );
  }
}
