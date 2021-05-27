export const checkBudget = (budget, remaining) => {
  if (budget * 0.25 >= remaining) {
    return "alert alert-danger";
  } else if (budget * 0.5 >= remaining) {
    return "alert alert-warning";
  } else if (budget * 0.75 >= remaining) {
    return "alert alert-info";
  } else {
    return "alert alert-success";
  }
};

/**
 * budget: 100
 * remaining:
 * when spend 25% => info
 * when spend 50% => warning
 * when spend 75% => danger
 * Defaulr => success
 */
