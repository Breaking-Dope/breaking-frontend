const extractHashtag = (content) => {
  content.match(/#[^\s#]+/g)?.map((hashtag) => hashtag.replace('#', ''));
};

export default extractHashtag;
