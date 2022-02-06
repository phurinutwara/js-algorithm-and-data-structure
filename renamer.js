const fs = require('fs');

(async () => {
    try {
        const files = await fs.readdirSync('./', {});
        console.log(files);
        const newNames = files.map((name) => {
            // return decodeURI(name);
            return name = name.replace(/(%20)/ig, ' ')
                .replace(/(%23)/ig, '#')
                .replace(/(%3A)/ig, ' -')
                .replace(/(%28)/ig, '(')
                .replace(/(%29)/ig);
        });
        console.log(newNames);

        files.forEach(async (name, index) => {
            await fs.renameSync(`${name}`, `${newNames[index]}`);
        });
    }
    catch (err) {
        console.log(`err`, err);
    }
})();