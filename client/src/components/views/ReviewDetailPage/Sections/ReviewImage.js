import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function ReviewImage(props) {
  const [Images, setImages] = useState([]);

  // useEffect is implemented when the DOM is loaded
  // but now when the dom is loaded, we couldn't get props.detail
  useEffect(() => {
    if (props.detail.fileUrl && props.detail.fileUrl.length > 0) {
      let images = [];

      props.detail.fileUrl &&
        props.detail.fileUrl.map((item) => {
          images.push({
            original: `${item}`,
            thumbnail: `${item}`,
          });
        });

      setImages(images);
    }
  }, [props.detail]);
  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default ReviewImage;
