import { Component } from "react"
import { Box } from "./box/Box"
import { SearchBar } from "./searchbar/SearchBar"
import App_css from "./App.module.css";
import { ImageGallery } from "./imagegallery/ImageGallery";

export class App extends Component {
  state = {
    searchText: "",
  }

  handleSubmit = (text) => {
    this.setState({searchText: text})
  }

  render() {
    return (
      <Box as={"div"} display="flex" flexDirection="column" justifyContent="center">
        <Box className={App_css.App}>
          <SearchBar onSubmit={this.handleSubmit}></SearchBar>
          <ImageGallery searchText={this.state.searchText}></ImageGallery>
        </Box>
      </Box>
  )
  }
}
