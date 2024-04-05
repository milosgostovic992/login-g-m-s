export const sortBy = (data, sortingCriteria, nameKey) => {
    if (data) {
      // Sort the data based on the selected criteria
      return [...data].sort((a, b) => {
        if (sortingCriteria === 'rank') {
          return a.rank - b.rank;
        } else if (sortingCriteria === 'rating') {
          return b.rating - a.rating;
        } else if (sortingCriteria === 'wins') {
          return b.wins - a.wins; // Sort by wins in descending order
        } else if (sortingCriteria === 'name') {
            return a[nameKey].localeCompare(b[nameKey]);
        }
      });
    }
    return [];
  };

export const searchBy = (data, sortingCriteria, nameKey) => {
    if (data) {
      // Sort the data based on the selected criteria
      return [...data].sort((a, b) => {
        if (sortingCriteria === 'rank') {
          return a.rank - b.rank;
        } else if (sortingCriteria === 'rating') {
          return b.rating - a.rating;
        } else if (sortingCriteria === 'wins') {
          return b.wins - a.wins; // Sort by wins in descending order
        } else if (sortingCriteria === 'name') {
            return a[nameKey].localeCompare(b[nameKey]);
        }
      });
    }
    return [];
  };

