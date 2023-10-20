const calcCompareTime = (sDate: string, eDate: string) => {
  let value = Math.floor(
    (new Date(sDate).getTime() - new Date(eDate).getTime()) / 1000 / 60
  );

  if (value === 0) {
    return "now";
  } else if (value > 0 && value <= 60) {
    return Math.floor(value) + " mins ago";
  } else if (value > 60 && value <= 1440) {
    return Math.floor(value / 60) + " hours ago";
  } else if (value > 1440 && value <= 43200) {
    return Math.floor(value / (60 * 24)) + " days ago";
  } else if (value > 43200 && value <= 518400) {
    return Math.floor(value / (60 * 24 * 30)) + " months ago";
  } else if (value > 518400) {
    return Math.floor(value / (60 * 24 * 30 * 12)) + " years ago";
  }
};

export { calcCompareTime };
