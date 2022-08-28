import { useEffect, useRef } from 'react';

const useInfiniteScroll = (data, FetchNextPage) => {
  const targetRef = useRef();

  const observer = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        FetchNextPage();
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    if (!data) FetchNextPage();

    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer && observer.disconnect();
  }, [data]);

  return { targetRef };
};

export default useInfiniteScroll;
