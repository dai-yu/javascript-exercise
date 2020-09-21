function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  return `你好，刘明！你的考试成绩为${getScore(person.id)}分`;
}
