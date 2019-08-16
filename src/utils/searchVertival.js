export default (array) => {
  const newArray = array;

  const empty = {
    key: 42,
    src: null,
    vertical: false,
    horizontal: false,
    empty: true,
  };

  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i].vertical) {
      newArray.splice(i + 2, 0, { ...empty, key: `_${newArray[i].key}` });
    }
    if (newArray[i].horizontal) {
      const element = newArray[i];
      if (i % 2 || (newArray[i + 1] && newArray[i + 1].empty)) {
        const newIndex = newArray.findIndex((item, index) => {
          if (index < i) return false;
          if (index % 2) return false;
          if (item.empty) return false;
          if (item.horizontal) return false;
          if (item.vertical) return false;
          if (newArray[i + 2].vertical && index === (i + 3)) return false;
          return true;
        });
        if (newIndex >= 0) {
          newArray.splice(i, 1, newArray[newIndex]);
          newArray.splice(newIndex, 1, element);
        } else {
          newArray.splice(i, 0, { ...empty, key: `_${newArray[i].key}` });
        }
      } else {
        newArray.splice(i + 1, 0, {
          ...empty, key: `_${newArray[i].key}`, height: element.height || false,
        });
      }
    }
  }

  return newArray;
};
