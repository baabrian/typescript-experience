export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  const year = dateParts[2];
  const month = dateParts[1] - 1;
  const dateOfMonth = dateParts[0];

  return new Date(year, month, dateOfMonth);
};
