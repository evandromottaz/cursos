const getFlag = (namestring, greeting) => {
  process.argv.push('--name' + namestring, '--greeting' + greeting);
  const stringFilter = process.argv.filter((item) =>
    item.includes(namestring, greeting),
  );
  console.log(`${greeting}, meu nome é ${namestring}`);
};

module.exports = getFlag;
