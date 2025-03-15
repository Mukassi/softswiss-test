export const renderText = (content: (string | { text: string; class: string })[]) =>
  content.map((element, index) =>
    typeof element === 'string' ? (
      <span key={element + index}>{element}</span>
    ) : (
      <span key={element.text + index} className={element.class}>
        {element.text}
      </span>
    )
  );
