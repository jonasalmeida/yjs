console.log(`${location.href}index.js loaded at \n${Date()}`);

// load SDK --> https://github.com/yjs/yjs/blob/master/README.md#API
(async function(){
    const Y = await import('https://esm.sh/yjs@13.6.15');
    doc = new Y.Doc()
    //debugger
})()

