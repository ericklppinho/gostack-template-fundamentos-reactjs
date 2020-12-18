const formatValue = (value: string): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(value));

export default formatValue;
