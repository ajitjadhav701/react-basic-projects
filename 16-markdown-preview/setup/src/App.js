import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>
             {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;




{ /*
copy and paste this text in textarea to see markdown

## markdown preview
>hey ajit lit looks good
#### hello world
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo id mollitia quibusdam? Est repudiandae, aut deleniti iusto nostrum dolorem vitae!

**bold text**
*itallic text*
#### unordered list
- first
- second
- third
#### ordered list
1. first
2. second
3. third

### code incide it
```
console.log('hey ajit going well';
System.Out.println('java');
```
### url
[google](www.google.com)
[facebook](www.facebook.com)

### image 
![image](https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg)

#### note:-
we can style this created html 

*/}