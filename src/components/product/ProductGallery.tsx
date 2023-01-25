import React from "react";
import styled from "styled-components";
interface IProductGalleryProps {
  item: any;
}
function ProductGallery({ item }: IProductGalleryProps) {
  return (
    <Wrapper>
      <div className="image-1-2-ct">
        <div className="image-1-2">
          <picture>
            <source
              media="(min-width:1440px)"
              srcSet={
                process.env.PUBLIC_URL + item.gallery.first.desktop.substring(1)
              }
            />
            <source
              media="(min-width:768px)"
              srcSet={
                process.env.PUBLIC_URL + item.gallery.first.tablet.substring(1)
              }
            />

            <img
              src={
                process.env.PUBLIC_URL + item.gallery.first.mobile.substring(1)
              }
              alt={`${item.category.substring(1)}`}
            />
          </picture>
        </div>
        <div className="image-1-2">
          <picture>
            <source
              media="(min-width:1440px)"
              srcSet={
                process.env.PUBLIC_URL +
                item.gallery.second.desktop.substring(1)
              }
            />
            <source
              media="(min-width:768px)"
              srcSet={
                process.env.PUBLIC_URL + item.gallery.second.tablet.substring(1)
              }
            />

            <img
              src={
                process.env.PUBLIC_URL + item.gallery.second.mobile.substring(1)
              }
              alt={`${item.category.substring(1)}`}
            />
          </picture>
        </div>
      </div>

      <div className="image-3">
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet={
              process.env.PUBLIC_URL + item.gallery.third.desktop.substring(1)
            }
          />
          <source
            media="(min-width:768px)"
            srcSet={
              process.env.PUBLIC_URL + item.gallery.third.tablet.substring(1)
            }
          />

          <img
            src={
              process.env.PUBLIC_URL + item.gallery.third.mobile.substring(1)
            }
            alt={`${item.category.substring(1)}`}
          />
        </picture>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 8.8rem;
  .image-1-2,
  .image-3 {
    border-radius: 0.8rem;
    overflow: hidden;
  }
  .image-1-2 {
    width: 32.7rem;
    height: 17.4rem;
  }
  .image-3 {
    width: 32.7rem;
    height: 36.8rem;
  }
  .image-1-2 img,
  .image-3 img {
    width: 100%;
    height: auto;
  }
  .image-1-2-ct {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 48em) {
    flex-direction: row;
    width: 69.8rem;
    gap: 2rem;
    .image-1-2 {
      width: 27.7rem;
      height: 17.4rem;
    }
    .image-3 {
      width: 39.5rem;
    }
    .image-1-2-ct {
      gap: 2rem;
    }
  }
  @media (min-width: 90em) {
    width: 111rem;
    margin-bottom: 12rem;
    gap: 3.2rem;
    .image-1-2 {
      width: 44.5rem;
      height: 28rem;
    }
    .image-3 {
      width: 63.5rem;
      height: 59.2rem;
    }
    .image-1-2-ct {
      gap: 3.2rem;
    }
  }
`;
export default ProductGallery;
