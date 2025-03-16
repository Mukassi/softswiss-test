export interface InfoArticleProps {
  title: string;
  description: string;
  info: string;
}

const InfoArticle: React.FC<InfoArticleProps> = ({ title, description, info }) => {
  return (
    <article className="container info">
      <h2 className="info__title">{title}</h2>
      <p className="info__text">{description}</p>
      <input id="toggle" type="checkbox" className="info__input" />
      <p className="info__text info__text__info">{info}</p>
      <label className="info__input-label" htmlFor="toggle">
        {''}
      </label>
    </article>
  );
};

export default InfoArticle;
