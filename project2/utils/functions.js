export function getDateStr(now) {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  return `${year}년 ${month > 9 ? month : ` ${month}`}월 ${date > 9 ? date : ` ${date}`}일`;
}

export function getDay(now) {
  const day = now.getDay();
  switch (day) {
    case 0: {
      return '일요일';
    }
    case 1: {
      return '월요일';
    }
    case 2: {
      return '화요일';
    }
    case 3: {
      return '수요일';
    }
    case 4: {
      return '목요일';
    }
    case 5: {
      return '금요일';
    }
    case 6: {
      return '토요일';
    }
  }
}

export function findItem(cur) {
  if (cur.className === 'item') return cur;
  else {
    cur = cur.parentNode;
    return findItem(cur);
  }
}
