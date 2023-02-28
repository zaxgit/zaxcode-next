import styles from './dropdown.module.scss';

import { useState } from 'react';

import Button from '../buttons/button';
import { IconArrDotDown } from '../icons/icons';
export default function Dropdown({ tags = [], filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.dropdown} text-color`}>
      <Button
        className={styles.dropdownButton}
        isPrimary={false}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {filter}
        <IconArrDotDown width={10} height={17} />
      </Button>

      {isOpen && (
        <ul className={`${styles.dropdownList} background`}>
          {filter !== 'All' && (
            <li className={styles.dropdownItem}>
              <Button
                isPrimary={false}
                value='All'
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setFilter(e.target.value);
                }}
              >
                All
              </Button>
            </li>
          )}

          {tags
            .filter((tag) => tag.name !== filter)
            .map((tag) => {
              return (
                <li className={styles.dropdownItem} key={tag.id}>
                  <Button
                    className='text-dark'
                    isPrimary={false}
                    value={tag.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                      setFilter(e.target.value);
                    }}
                  >
                    {tag.name}
                  </Button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
