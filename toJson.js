var data = JSON.parse(fs.readFileSync('Other Tweets.txt'));
fs.writeFile ("file.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);