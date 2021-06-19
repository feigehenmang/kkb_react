export const getDocument = (node) => isElement(node) ? node.ownerDocument : (node.document || window.document)

export const getDocumentElement = node => getDocument(node).documentElement

export const isElement = (node) => {
    const OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || (node) instanceof Element;
  };

export const getWindow = (
    node
  ) => {
    // if node is not the window object
    if (node.toString() !== '[object Window]') {
      // get the top-level document object of the node, or null if node is a document.
      const { ownerDocument } = node;
      // get the window object associated with the document, or null if none is available.
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  };
  export const getMaskStyle = (anchorEl) => {
    const scrollContainer = getDocumentElement(anchorEl);
    const { scrollWidth, scrollHeight, scrollTop } = scrollContainer;
    // prevent scrolling
    scrollContainer.style.overflow = 'hidden';
  
    const anchorPos = anchorEl.getBoundingClientRect();
    const { height, width, left } = anchorPos;
  
    const top = anchorPos.top + scrollTop;
  
    return {
      width: scrollWidth,
      height: scrollHeight,
      borderTopWidth: Math.max(top, 0),
      borderBottomWidth: Math.max(scrollHeight - height - top, 0),
      borderRightWidth: Math.max(scrollWidth - width - left, 0),
      borderLeftWidth: Math.max(left, 0),
    };
  };
  
export function getParentElement(el) {
    
}

export const getComputedStyle = (node) => getWindow(node).getComputedStyle(node);
