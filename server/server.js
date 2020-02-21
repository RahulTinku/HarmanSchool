/**import required dependencies */
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
/**Set port */
const port = 3000;
/**To enable CORS functionality */
app.use(cors());
/**Get course api 
 * Red file to get response
 * @returns data if success
*/
app.get('/courses', (req, res) => {
    fs.readFile('course.txt', 'utf8', (err,data)=>{
        if(err)console.log(err);
        res.status(200).send(data)
    })
})
/**Get Program api 
 * Red file to get response
 * @returns data if success
*/
app.get('/program', (req, res) => {
    fs.readFile('program.txt', 'utf8', (err,data)=>{
        if(err)console.log(err);
        res.status(200).send(data)
    })
})
/**Get Teachers api 
 * Red file to get response
 * @returns data if success
*/
app.get('/teachers', (req, res) => {
    fs.readFile('teachers.txt', 'utf8', (err,data)=>{
        if(err)console.log(err);
        res.status(200).send(data)
    })
})
/**Start the server on gien port */
app.listen(port, () => console.log(`Application listening on port ${port}!`))