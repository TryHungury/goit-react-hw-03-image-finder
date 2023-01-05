import ImageGalleryItem_css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = () => {
    const { ImageGalleryItem, ImageGalleryItem_image } = ImageGalleryItem_css;
    return ( 
    <><li className={ImageGalleryItem}>
    <img className={ImageGalleryItem_image} src="#" alt="#" />
  </li>
  
  </>
  )
}