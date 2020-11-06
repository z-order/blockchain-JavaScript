try {
    const array = new Array(-2000);
} catch(exception) {
    console.log(`${exception.name} 예외가 발생했습니다.`);
    console.log(`message:${exception.message}`);
} finally {
    console.log(`finally 구문이 실행되었습니다.`);
}

//////////////////////////////////////////////////////////////

// try {
//     throw `강제 예외를 발생시켰습니다.`;
// } catch (exception) {
//     console.log(`예외가 발생했습니다.`);
//     console.log(exception);
// }
//////////////////////////////////////////////////////////////
// try {
//     const error = new Error(`Message`);
//     error.name = `My Error Name`;
//     error.message = `My Error Message`;
//     throw error;
// } catch(exception) {
//     console.log(`${exception.name} 예외가 발생했습니다.`);
//     console.log(`message:${exception.message}`);
// }
//////////////////////////////////////////////////////////////