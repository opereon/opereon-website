var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

/*
var figures = document.querySelectorAll('figure.code');
figures.forEach((f) => {
    let buttons = f.querySelector('.buttons');
    let content = f.querySelector('.highlight');
    buttons.style.visibility = 'hidden';
    content.addEventListener('mouseover', () => buttons.style.visibility = 'visible');
    content.addEventListener('mouseout', () => buttons.style.visibility = 'hidden');
});
*/

let figures = document.querySelectorAll('figure.code');
figures.forEach((f) => {
    let btn = f.querySelector('button.clipboard');
    let content = f.querySelector('.highlight > pre > code');
    if (!content) {
        content = f.querySelector('.highlight tr > td:nth-child(2) > pre > code');
    }
    btn.attributes['aria-label'] = "Copy to clipboard";
    btn.attributes['title'] = "Copy to clipboard";
    new ClipboardJS(btn, {
        target: () => {
            window.alert("dupa");
            return content;
        }
    });

    let tree = f.querySelector('pre code[data-lang="ascii-tree"]');
    if (tree) {
        let input = tree.innerText;
        let output = ascii_tree_generate(input);
        tree.innerHTML = output;
    }
});

