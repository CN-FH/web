// number|string 联合类型

function printID(id: number|string|boolean) {
  // 使用联合类型的值时，需要特别小心
  if (typeof id == 'string') {
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123)
printID('abc')
printID(true)
