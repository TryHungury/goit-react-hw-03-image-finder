import { Component } from 'react';
import SearchBar_css from './SearchBar.module.css';

export class SearchBar extends Component {    
    render() {
        const { SearchBar, SearchForm, SearchForm_button, SearchForm_button_label, SearchForm_input } = SearchBar_css;
        return (
        <header className={SearchBar}>
        <form className={SearchForm}>
          <button type="submit" className={SearchForm_button}>
            <span className={SearchForm_button_label}>Search</span>
          </button>
      
          <input
            className={SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      )
    }
}