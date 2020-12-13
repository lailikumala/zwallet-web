const onChangeInput = (e) => {
  const value = e.value;
  const isNumber = value.match(/[0-9]/i);
  if (!isNumber) return (e.value = "");
};

var container = document.getElementsByClassName("input-class");
Array.from(container).forEach((item, index) => {
  item.onkeyup = function (e) {
    // console.log(e);
    const target = e.target;
    const myLength = target.value.length;
    if (myLength >= 1) {
      if (index < container.length - 1) {
        const next = container.item(index + 1);
        next.firstElementChild.focus();
      }
    }
  };
});