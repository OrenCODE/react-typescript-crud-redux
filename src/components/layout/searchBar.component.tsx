import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchLogs } from '../../redux/actions/logActions';

export default function SearchBar() {

  const dispatch = useDispatch();

  const text = useRef<any>('');

  const onChange = (e: any) => {
    dispatch(searchLogs(text.current.value));
  }

  return (
    <nav style={styles.navbar} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder='Search Logs...'
              ref={text}
              onChange={onChange}
            />
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