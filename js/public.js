function initNav(activeId) {
    getElementById('nav').innerHTML =
    `
    <ul>
    <li>
        <a href="https://over-run.github.io/" id="Aindex" target="_blank" rel="noopener noreferrer">主页</a>
    </li>
    <li>
        <a href="https://over-run.github.io/blog/" id="Ablog" target="_blank" rel="noopener noreferrer">博客</a>
            <ul>
                <li>
                    <a href="https://over-run.github.io/blog/2020/" id="Ablog-2020" target="_blank" rel="noopener noreferrer">2020 (2)</a>
                    <ul>
                        <li>
                            <a href="https://over-run.github.io/blog/2020/11-28.html" id="Ablog-2020-11-28" target="_blank" rel="noopener noreferrer">11.28</a>
                        </li>
                        <li>
                            <a href="https://over-run.github.io/blog/2020/12-12.html" id="Ablog-2020-12-12" target="_blank" rel="noopener noreferrer">12.12</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="https://over-run.github.io/wiki/" id="Awiki" target="_blank" rel="noopener noreferrer">Wiki</a>
            <ul>
                <li>
                    <a href="https://over-run.github.io/wiki/mc2d/" id="Awiki-mc2d" target="_blank" rel="noopener noreferrer">Minecraft2D Wiki</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="https://over-run.github.io/tools/" id="Atools" target="_blank" rel="noopener noreferrer">工具</a>
            <ul>
                <li>
                    <a href="https://over-run.github.io/tools/contrastchecker/" id="Atools-contrastchecker" target="_blank" rel="noopener noreferrer">对比度在线测试</a>
                </li>
            </ul>
        </li>
    </ul>
`;
    getElementById('nav').className = 'nav';
    for (let i = 0; i < activeId.length; i++) {
        if (getElementById('A' + activeId[i]).href == document.URL) {
            getElementById('A' + activeId[i]).href = '#';
            getElementById('A' + activeId[i]).target = '';
        }
        getElementById('A' + activeId[i]).className = 'active';
    }
    getElementById('nav').parentElement.style.marginTop = '46px';
}

function getElementById(id) {
    return document.getElementById(id);
}