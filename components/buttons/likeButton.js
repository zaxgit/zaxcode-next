import styles from './likeButton.module.scss';
import { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

export default function LikeButton({ postId }) {
  const [isLiked, setIsLiked] = useState(false);

  const color = isLiked ? 'color-primary' : 'text-dark';

  useEffect(() => {
    const hasStored = localStorage.getItem(postId);
    if (hasStored === 'true') {
      setIsLiked(true);
    } else if (hasStored === 'false') {
      setIsLiked(false);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(postId, 'true');
    } else {
      localStorage.setItem(postId, 'false');
    }
  }, [isLiked]);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button className={`${styles.likeButton} ${color}`} onClick={toggleLiked}>
      <AiFillLike />
    </button>
  );
}
