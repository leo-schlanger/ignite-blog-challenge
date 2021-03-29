import { useEffect } from 'react';

export default function Comments(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('repo', 'leo-schlanger/ignite-blog-challenge');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    script.setAttribute('async', 'async');
    anchor.appendChild(script);
  }, []);

  return <div id="inject-comments-for-uterances" />;
}
