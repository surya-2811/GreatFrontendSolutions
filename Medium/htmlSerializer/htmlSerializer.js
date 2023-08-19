/**
 * @param {Node} node
 * @return {string}
 */

function serializeNode(obj, indent = '\t') {
    function traverse(node, depth = 0) {
      return node.children
        ? [
            `${indent.repeat(depth)}<${node.tag}>`,
            ...node.children.flatMap((child) => traverse(child, depth + 1)),
            `${indent.repeat(depth)}</${node.tag}>`,
          ]
        : `${indent.repeat(depth)}${node}`;
    }
  
    return traverse(obj).join('\n');
}

const tree = {
    tag: 'body',
    children: [
      { tag: 'div', children: [{ tag: 'span', children: ['foo', 'bar'] }] },
      { tag: 'div', children: ['baz'] },
    ],
  };
  
serializeNode(tree);
  
  