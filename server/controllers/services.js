const RESULTS_BY_PAGES = 8;

const pagination = (datas, page) => {
  const start = (page - 1) * RESULTS_BY_PAGES;
  const end = start + RESULTS_BY_PAGES;
  return datas.slice(start, end);
};

module.exports = { pagination };
