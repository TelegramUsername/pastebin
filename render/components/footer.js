module.exports = (m, {isSnippet}) => {
    return m("footer", [
        m("div.footer-keybindings",
            m(
                "a#newButton.submit",
                {href: "/"},
                [
                    "New Snippet", m("span.keyboard-shortcut", [": Ctrl + Alt + A"])
                ],
            ),
            "  ",
            m(
                "button#actionButton.submit",
                {
                    type: "submit",
                    formaction: isSnippet ? "fork" : "/",
                    formenctype: "application/x-www-form-urlencoded",
                    formmethod: "post",
                    form: "codeSnippet",
                },
                isSnippet
                    ? ["Fork", m("span.keyboard-shortcut", [": Ctrl + Alt + F"])]
                    : ["Save", m("span.keyboard-shortcut", [": Ctrl + S"])],
            ),
            " ",
        ),
    ]);
};
