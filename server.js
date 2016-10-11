var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One | Swathi Shastry',
        heading: 'Article One',
        date: 'OCT 8, 2016',
        content : `  <p>
                    This is the content for my first article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                    This is the content for my first article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                        This is the content for my first article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    `
    },
    'article-two' : {
        title: 'Article Two | Swathi Shastry',
        heading: 'Article Two',
        date: 'OCT 8, 2016',
        content : `  <p>
                    This is the content for my second article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                    This is the content for my second article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                        This is the content for my second article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    `
    },
    'article-three' : {
        title: 'Article Three | Swathi Shastry',
        heading: 'Article Three',
        date: 'OCT 8, 2016',
        content : `  <p>
                    This is the content for my third article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                    This is the content for my third article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    <p>
                        This is the content for my third article. I am really very exited to do it. I have an exam twenty three.......
                    </p>
                    `
    }
};

function createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.heading;
    var content=data.content;
    var htmlTemplate= `
        <hmtl>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, intial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">home </a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    <h1>
                       ${date}
                    </h1>
                </div>
                <div> 
                    ${content}
                </div>
            </div>
        <body>
                    
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    var articleName=req.param.artincleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
