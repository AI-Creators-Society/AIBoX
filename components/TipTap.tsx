"use client";

import { useEditor, EditorContent } from "@tiptap/react";
// eslint-disable-next-line import/no-named-as-default
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello World! 🌎️</p>",
    });

    return <EditorContent editor={editor} />;
};

export default Tiptap;
