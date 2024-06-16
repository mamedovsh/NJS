// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

// function loadCountersFromFile() {
//     try {
//         const data = fs.readFileSync('counters.json');
//         return JSON.parse(data);
//     } catch (error) {
//         return {}
//     }
// }
// function saveCountersToFile(counters) {
//     fs.writeFileSync('counters.json', JSON.stringify(counters, null, 2));
// }

// let counters = loadCountersFromFile();

// app.get('/', (req, res) => {
//     if (!counters['/']){
//         counters['/'] = 1;

//     } else {
//         counters['/']++;
//     }
//     saveCountersToFile(counters);
//     res.send(`Counter for "/" page: ${counters['/']}`);
// });

// app.get('/about', (req, res) => {
//     if (!counters['/about']){
//         counters['/about'] = 1;

//     } else {
//         counters['/about']++;
//     }
//     saveCountersToFile(counters);
//     res.send(`Counter for "/about" page: ${counters['/about']}`);
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// })
