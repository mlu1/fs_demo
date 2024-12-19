import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    state = {
        user: '',
    };

    componentDidUpdate(prevProps) {
        const { user } = this.props.match.params;

        // Only update state if the user has changed
        if (user !== prevProps.match.params.user) {
            this.setState({ user });
        }
    }

    render() {
        const { user } = this.state;

        return (
            <div
                className="ui raised very padded text container segment"
                style={{ marginTop: '80px' }}
            >
                <h3 className="ui header">{user}</h3>
            </div>
        );
    }
}

// Define PropTypes for validation
Card.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            user: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Card;
