import htmlParse from 'html-react-parser';

export default function nodesToHtml(nodes: any) {
  if (!nodes) return '';

  const htmlMap = nodes.content.map((outerContent: any) => {
    switch (outerContent.type) {
      case 'paragraph':
        const innerContent = outerContent.content.map((node: any) => {
          console.log(node.text);
          switch (node.type) {
            case 'text':
              return `<p>${node.text}</p>`;
          }
        });
        return innerContent;
      default:
        return '';
    }
  });

  return htmlParse(htmlMap.join(''));
}