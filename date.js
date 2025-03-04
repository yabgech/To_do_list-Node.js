exports.gateDate = function () {
  const day1 = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const day = day1.toLocaleDateString("en-US", options);

  return day;
};

// another funtin to get the day

function gateDa() {
  const day1 = new Date();

  let options = {
    weekday: "long",
  };

  const day = day1.toLocaleDateString("en-US", options);

  return day;
}
