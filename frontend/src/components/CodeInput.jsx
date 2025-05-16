// src/components/CodeInput.jsx
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

export default function CodeInput({ value, onChange }) {
  return (
    <div className="my-4">
      <label className="block text-sm mb-2 text-primary">Code</label>
      <CodeMirror
        value={value}
        height="200px"
        theme={vscodeDark}
        extensions={[cpp()]}
        onChange={(val) => onChange(val)}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          foldGutter: false,
        }}
      />
    </div>
  );
}
