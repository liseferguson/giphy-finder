import React from 'react';

const ImageList = (props) => {
	console.log(props.images);
	const images = props.images.map(image => {
		return <img key={image.id} alt={image.title} src={image.images.original.url} />
	});
	return <div>{images}</div>;
};

export default ImageList;