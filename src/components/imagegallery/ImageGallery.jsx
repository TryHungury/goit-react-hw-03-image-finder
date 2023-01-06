import { ImageGalleryItem } from "components/imagegalleryitem/ImageGalleryItem";
import ImageGallery_css from "./ImageGallery.module.css";
import { Component } from "react";
import { Button } from "components/button/Button";
import { Spinner } from "components/spinner/Spinner";

export class ImageGallery extends Component {
  state = {
    activeSpinner: false,
  }
  

  componentDidUpdate(prevProps){
    const searchText = this.props.searchText

    if (prevProps.searchText !== searchText) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "31470169-9c9cb372459e41628308e9796";
    const imageType = "photo";
    const oriental = "horizontal";
    const perPage = 12;
    const page = 1;

    this.setState({activeSpinner: true})
      fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${oriental}&per_page=${perPage}`)
      .then(response => response.json())
      .catch(err => err.json)
      .finally(()=>this.setState({activeSpinner: false}))
    }
  }

  // handleActiveSpinnerToggle = () => {
  //   this.setState({activeSpinner: !this.state.activeSpinner})
  // }

  render () {
    const { activeSpinner } = this.state;
  return (
  <>
  <ul className={ImageGallery_css.ImageGallery}>
      <ImageGalleryItem></ImageGalleryItem>
  </ul>
      {activeSpinner && <Spinner></Spinner>}
      <Button></Button>
  </>
)
}
}