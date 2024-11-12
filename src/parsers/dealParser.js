export const dealParser = (deal) => {
  return {
    id: deal.Id,
    title: deal.Title,
    amount: deal.Amount,
    status: deal.Status,
    startDate: deal.StartDate,
  };
};