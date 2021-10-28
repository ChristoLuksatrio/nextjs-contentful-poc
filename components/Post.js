function Post({ date, image, title }) {
  let { file, description } = image;

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Post;
