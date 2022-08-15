import React, { useRef, memo } from 'react';
import styles from './search.module.css';
import { youtubeIcon } from '../../assets/images/';
import { IoSearchOutline } from 'react-icons/io5';

const Search = memo(({ onSearch }) => {
  const inputRef = useRef();

  // 역할을 수행하는 함수가 2개 이상이 되는 경우 하나로 합치는 리팩토링이 필요함
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClickButton = () => {
    handleSearch();
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img className={styles.img} src={youtubeIcon} alt='youtube logo' />
        <h2 className={styles.title}>YouTube</h2>
      </div>
      <input ref={inputRef} className={styles.input} type='text' placeholder='Search..' onKeyDown={onKeyPress} />
      <button className={styles.button} type='button' onClick={onClickButton}>
        <IoSearchOutline />
      </button>
    </header>
  );
});

Search.displayName = 'Search';

export default Search;
