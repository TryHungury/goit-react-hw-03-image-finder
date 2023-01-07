import { ImageGalleryItem } from "components/imagegalleryitem/ImageGalleryItem";
import ImageGallery_css from "./ImageGallery.module.css";
import { Component } from "react";
import { Button } from "components/button/Button";
import { Spinner } from "components/spinner/Spinner";
import { Modal } from "components/modal/Modal";
import { Box } from "components/box/Box";

export class ImageGallery extends Component {
  state = {
    images: null,
    activeSpinner: false,
    activeModal: false,
    modalImageView: "",
    user: "",
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    const searchText = this.props.searchText;
    const { page } = this.state;

    if (prevProps.searchText !== searchText || prevState.page !== page) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "31470169-9c9cb372459e41628308e9796";
    const imageType = "photo";
    const oriental = "horizontal";
    const perPage = 12;

    this.setState({activeSpinner: true})
      fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${oriental}&per_page=${perPage}`)
      .then(response => response.json())
      .then((images) => this.setState({ images }))
      .catch(err => err.json)
      .finally(()=>this.setState({activeSpinner: false}))
    }

    return
  }

  handlePageIncrement = () => {
    this.setState((prevState)=>({page: prevState.page += 1}))
  }

  handleActiveModalToggle = () => {
    this.setState((prevState)=>({activeModal: !prevState.activeModal}))
  }

  handleOnImageClick = (modalImageView, user) => {
  this.handleActiveModalToggle();
  this.setState({modalImageView})
  this.setState({user})
  }

  render () {
    const { activeSpinner, images, activeModal, modalImageView, user } = this.state;
  return (
  <>
  <ul className={ImageGallery_css.ImageGallery}>
      <ImageGalleryItem onClick={this.handleOnImageClick} images={images}></ImageGalleryItem>
  </ul>
      {activeSpinner && <Box justifyContent="center"><Spinner ></Spinner></Box>}
      {images && images.total > 12 && <Button onClick={this.handlePageIncrement}></Button>}
      {activeModal && <Modal onClick={this.handleActiveModalToggle} url={modalImageView} alt={user}></Modal>}
  </>
)
}
}