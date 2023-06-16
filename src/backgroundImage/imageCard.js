import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
    }

    render() {
        return (
            <div>
                <img
                    ref={this.imageRef}
                    src={this.props.image.urls.regular}
                    alt={this.props.image.description}
                />
            </div>
        );
    }
}

export default ImageCard;
