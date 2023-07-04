const meal = {
  한식: "불고기",
  중식: "멘보사",
  일식: "초밥",
};

const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getMeal("한식"));
