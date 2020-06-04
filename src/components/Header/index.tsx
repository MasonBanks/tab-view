import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styles from './Header.module.scss';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchDisabledToggle: boolean
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm, searchDisabledToggle }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.header}>
      <span>icon</span>
      <input
        id='searchBox'
        ref={inputRef}
        type='text'
        placeholder='Search...'
        disabled={searchDisabledToggle}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button>O</button>
    </div>
  );
};

export default Header;
