const fs = require('fs')
const concat = (answers) => {
    const files = fs.readdirSync(process.cwd())
    const concatFiles = files.filter((item) => {
        if (item.endsWith('.' + type)) {
            return true
        }
    })
    /* 问题列表 */
    const content = concatFiles.reduce( (content,item,index, ) => {
        const fileContent =  fs.readFileSync(process.cwd() + '/' + item)
        // console.log(content, fileContent.toString());
        return `
        ${content}
        \/\/ ${item}
        ${fileContent.toString()}
        `
    }, '')
    // console.log(content);
    // const content = 'ssdsadsadsad'
    // console.log(`./${answers.name}.${type}`);
    fs.writeFileSync(`./${answers.name}.${type}`, content)

}


module.exports = concat
