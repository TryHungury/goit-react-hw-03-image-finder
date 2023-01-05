import { ImageGalleryItem } from "components/imagegalleryitem/ImageGalleryItem";
import ImageGallery_css from "./ImageGallery.module.css";

export const ImageGallery = () => {
    return (
    <ul className={ImageGallery_css.ImageGallery}>
        <ImageGalleryItem></ImageGalleryItem>
  </ul>
  )
}