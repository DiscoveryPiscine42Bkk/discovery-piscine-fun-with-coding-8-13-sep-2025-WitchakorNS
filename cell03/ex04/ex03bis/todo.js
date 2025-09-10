const COOKIE_EXPIRE = "Thu, 01 Jan 2026 00:00:00 UTC";

    function deleteCookie(key) {
        document.cookie = `${key}=; expires=${COOKIE_EXPIRE};`;
    }

    function makeNode(txt, key) {
        const $node = $("<div></div>").text(txt);
        $node.click(function() {
        if (confirm("Do you want to delete")) {
            $(this).remove();
            deleteCookie(key);
        }
        });
        return $node;
    }

    function create() {
        const txt = prompt("Please Enter TODO LIST :");
        if (!txt) return;
        const name = String(new Date().getTime());
        document.cookie = `${name}=${txt}`;
        $("#list").prepend(makeNode(txt, name));
    }

    (document.cookie || "")
        .split(";")
        .map(s => s.trim())
        .filter(Boolean)
        .forEach(kv => {
        const [key, ...rest] = kv.split("=");
        const value = rest.join("=");
        $("#list").prepend(makeNode(value, key));
    });

    $("#new").click(create);
