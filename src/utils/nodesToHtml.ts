import htmlParse from 'html-react-parser';
import { flatten, join } from 'ramda';

export default function nodesToHtml(nodes: any) {
  if (!nodes) return '';

  const htmlMap = JSON.parse(nodes).content.map((outerContent: any) => {
    switch (outerContent.type) {
      case 'paragraph':
        if (!outerContent.content) return '<p></p>';
        const innerContent = outerContent.content.map((node: any) => {
          switch (node.type) {
            case 'text':
              return node.text;
            case 'hard_break':
              return '<br>';
            default:
              return '';
          }
        });
        return `<p>${join('', flatten(innerContent))}</p>`;
      default:
        return '';
    }
  });

  return htmlMap.join('');
}
