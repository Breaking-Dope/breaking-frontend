import { useEffect, useRef } from 'react';

const useInfiniteScroll = (data, Fetch) => {
  const targetRef = useRef();

  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        Fetch();
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    if (!data) Fetch();

    if (targetRef.current) observer.observe(targetRef.current);
  }, [data]);

  return { targetRef };
};

export default useInfiniteScroll;
