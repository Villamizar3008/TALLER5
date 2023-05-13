function createTag(tag) {
    var tagHtml = document.createElement(tag);
    return tagHtml
}

function createTagWithText(tag,text) {
    var tagHtml = createTag(tag);
    var textHtml = document.createTextNode(text);
    tagHtml.appendChild(textHtml);
    document.body.appendChild(tagHtml);
    return tagHtml;
}

function createTagImage(path) {
    var tagImg = document.createElement("img");
    tagImg.src = path
    return tagImg
}

function createTagA(text, url) {
    var tagImg = createTagWithText("a", text)
    tagImg.href = url
    return tagImg
}

function addElementContainer(container, element) {
    container.appendChild(element)
}

function addElement(element) {
    document.body.appendChild(element);
}


