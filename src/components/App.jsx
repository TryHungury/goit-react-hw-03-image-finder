import { Component } from "react"
import { Box } from "./box/Box"
import { SearchBar } from "./searchbar/SearchBar"
import App_css from "./App.module.css";
import { ImageGallery } from "./imagegallery/ImageGallery";
import { Button } from "./button/Button";

 
// const API_KEY = "31470169-9c9cb372459e41628308e9796"
export class App extends Component {
  state = {
  }

  render() {
    return (
      <Box as={"div"} display="flex" flexDirection="column" justifyContent="center">
        <Box className={App_css.App}>
          <SearchBar></SearchBar>
          <ImageGallery></ImageGallery>
        </Box>
        <Button></Button>
      </Box>
  )
  }
}
