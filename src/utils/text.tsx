export const renderText = (content: (string | { text: string; class: string })[] | string) =>
  Array.isArray(content)
    ? content.map((element, index) =>
        typeof element === 'string' ? (
          <span key={element + index}>{element}</span>
        ) : (
          <span key={element.text + index} className={element.class}>
            {element.text}
          </span>
        )
      )
    : content.split('\n').map((str, index) => (
        <span key={str + index}>
          {str}
          <br />
        </span>
      ));
