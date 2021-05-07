import React from 'react';

export type Props = {

}

export default function SearchBar(props: Props) {
  return (
    <nav style={styles.navbar} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    marginBottom: '30px'
  },
}