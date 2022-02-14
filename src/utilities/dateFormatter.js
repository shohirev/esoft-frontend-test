const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat("ru", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const dateParts = formatter.formatToParts(new Date(date));

  const formattedDate = dateParts.reduce((acc, datePart) => {
    if (datePart.type === 'month') {
      // month name without dot
      acc += datePart.value.match(/[а-яА-Я]+/)[0];
    } else {
      acc += datePart.value;
    }
    return acc;
  }, '');

  return formattedDate;
};

export default formatDate;
