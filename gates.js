jade_defs.gates = function (jade) { jade.model.load_json(
{"/gates/xnor2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "140p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.006p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "27", "choices": [""]}}, "icon": [["line", [8, 20, 0, 8, 0]], ["line", [8, -4, 0, 8, 0]], ["arc", [16, -4, 0, 20, 12, 18, 9]], ["arc", [16, 20, 6, 20, 12, 18, 9]], ["arc", [8, -4, 0, 0, 24, 3, 12]], ["property", [32, 14, 0], {"align": "top-left", "format": "{name}"}], ["arc", [5, -4, 0, 0, 24, 3, 12]], ["terminal", [0, 0, 0], {"line": "no", "name": "A"}], ["terminal", [0, 16, 0], {"line": "no", "name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [0, 0, 0, 7, 0]], ["line", [0, 16, 0, 7, 0]], ["circle", [38, 8, 0, 2]]]}, "/gates/dreg": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "190p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4300", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "ts": {"edit": "no", "label": "Setup time (s)", "type": "number", "value": "200p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "th": {"edit": "no", "label": "Hold time (s)", "type": "number", "value": "25p", "choices": [""]}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "56", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "D"}], ["terminal", [0, 16, 0], {"name": "CLK"}], ["terminal", [40, 0, 4], {"name": "Q"}], ["text", [10, 0, 0], {"text": "D", "font": "4pt sans-serif"}], ["text", [30, 0, 0], {"text": "Q", "align": "center-right", "font": "4pt sans-serif"}], ["line", [8, -8, 0, 24, 0]], ["line", [32, -8, 0, 0, 32]], ["line", [32, 24, 0, -24, 0]], ["line", [8, 24, 0, 0, -32]], ["line", [14, 16, 0, -6, 3]], ["line", [14, 16, 6, -6, 3]], ["property", [20, -8, 0], {"align": "bottom-center", "format": "{name}"}]]}, "/gates/nor2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "50p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "6700", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.004p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2400", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "10p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "10", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [8, 20, 0, 8, 0]], ["line", [8, -4, 0, 8, 0]], ["arc", [16, -4, 0, 20, 12, 18, 9]], ["arc", [16, 20, 6, 20, 12, 18, 9]], ["circle", [38, 8, 0, 2.23606797749979]], ["arc", [8, -4, 0, 0, 24, 3, 12]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 2, 0]], ["property", [32, 14, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/nor3": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "80p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "8500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": ".005p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2400", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "20p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "13", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 16, 4], {"name": "Z"}], ["line", [8, 28, 0, 8, 0]], ["line", [8, 4, 0, 8, 0]], ["arc", [16, 4, 0, 20, 12, 18, 9]], ["arc", [16, 28, 6, 20, 12, 18, 9]], ["circle", [38, 16, 0, 2.23606797749979]], ["arc", [8, 4, 0, 0, 24, 3, 12]], ["property", [32, 22, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["arc", [8, -4, 0, 0, 8, 2, 4]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 3, 0]], ["line", [8, 32, 0, 2, 0]], ["arc", [8, 28, 0, 0, 8, 2, 5]]]}, "/gates/nor4": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "120p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "9500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.005p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2400", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "20p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "20", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 24, 4], {"name": "Z"}], ["line", [8, 36, 0, 8, 0]], ["line", [8, 12, 0, 8, 0]], ["arc", [16, 12, 0, 20, 12, 18, 9]], ["arc", [16, 36, 6, 20, 12, 18, 9]], ["circle", [38, 24, 0, 2.23606797749979]], ["arc", [8, 12, 0, 0, 24, 3, 12]], ["property", [32, 30, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["terminal", [0, 48, 0], {"name": "D"}], ["arc", [8, 36, 0, 0, 17, 2, 12]], ["arc", [8, 12, 6, 0, 17, 2, 12]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 2, 0]], ["line", [8, 32, 0, 2, 0]], ["line", [8, 48, 0, 2, 0]]]}, "/gates/or3": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "210p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.003p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "40p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "17", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 16, 4], {"name": "Z"}], ["line", [8, 28, 0, 8, 0]], ["line", [8, 4, 0, 8, 0]], ["arc", [16, 4, 0, 20, 12, 18, 9]], ["arc", [16, 28, 6, 20, 12, 18, 9]], ["arc", [8, 4, 0, 0, 24, 3, 12]], ["property", [32, 22, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["arc", [8, -4, 0, 0, 8, 2, 4]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 3, 0]], ["line", [8, 32, 0, 2, 0]], ["arc", [8, 28, 0, 0, 8, 2, 5]], ["line", [40, 16, 0, -4, 0]]]}, "/gates/or2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "150p", "choices": [""]}, "name": {"edit": "yes", "label": "name", "type": "string", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "13", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [8, 20, 0, 8, 0]], ["line", [8, -4, 0, 8, 0]], ["arc", [16, -4, 0, 20, 12, 18, 9]], ["arc", [16, 20, 6, 20, 12, 18, 9]], ["arc", [8, -4, 0, 0, 24, 3, 12]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 2, 0]], ["property", [32, 14, 0], {"align": "top-left", "format": "{name}"}], ["line", [40, 8, 0, -4, 0]]]}, "/gates/or4": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "290p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": ".003p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2600", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "60p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "20", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 24, 4], {"name": "Z"}], ["line", [8, 36, 0, 8, 0]], ["line", [8, 12, 0, 8, 0]], ["arc", [16, 12, 0, 20, 12, 18, 9]], ["arc", [16, 36, 6, 20, 12, 18, 9]], ["arc", [8, 12, 0, 0, 24, 3, 12]], ["property", [32, 30, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["terminal", [0, 48, 0], {"name": "D"}], ["arc", [8, 36, 0, 0, 17, 2, 12]], ["arc", [8, 12, 6, 0, 17, 2, 12]], ["line", [8, 0, 0, 2, 0]], ["line", [8, 16, 0, 2, 0]], ["line", [8, 32, 0, 2, 0]], ["line", [8, 48, 0, 2, 0]], ["line", [40, 24, 0, -4, 0]]]}, "/gates/tristate": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "150p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "2300", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": ".004p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "1300", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "23", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [32, 0, 4], {"name": "Z"}], ["line", [8, -8, 0, 0, 16]], ["line", [8, 8, 0, 16, -8]], ["line", [24, 0, 0, -16, -8]], ["property", [19, 3, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [16, 16, 3], {"name": "E"}], ["line", [16, 8, 0, 0, -4]]]}, "/gates/mux4": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "190p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.006p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "40p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "66", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"line": "no", "name": "D3"}], ["terminal", [0, 16, 0], {"line": "no", "name": "D2"}], ["terminal", [8, 64, 5], {"name": "S[1:0]"}], ["terminal", [16, 24, 4], {"line": "no", "name": "Y"}], ["text", [5, 0, 0], {"text": "3", "font": "4pt sans-serif"}], ["text", [5, 16, 0], {"text": "2", "font": "4pt sans-serif"}], ["terminal", [0, 32, 0], {"line": "no", "name": "D1"}], ["terminal", [0, 48, 0], {"line": "no", "name": "D0"}], ["line", [4, -8, 0, 0, 64]], ["text", [5, 32, 0], {"text": "1", "font": "4pt sans-serif"}], ["text", [5, 48, 0], {"text": "0", "font": "4pt sans-serif"}], ["line", [0, 0, 0, 4, 0]], ["line", [0, 16, 0, 4, 0]], ["line", [0, 32, 0, 4, 0]], ["line", [0, 48, 0, 4, 0]], ["line", [16, 24, 0, -4, 0]], ["line", [4, -8, 0, 8, 8]], ["line", [4, 56, 0, 8, -8]], ["line", [12, 0, 0, 0, 48]], ["line", [8, 56, 0, 0, -4]], ["property", [12, 52, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/inverter": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "20p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "2300", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.007p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "1200", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "5p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "10", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [32, 0, 4], {"line": "no", "name": "Z"}], ["line", [8, -8, 0, 0, 16]], ["line", [8, 8, 0, 16, -8]], ["line", [24, 0, 0, -16, -8]], ["property", [16, 4, 0], {"align": "top-left", "format": "{name}"}], ["circle", [26, 0, 0, 2]], ["line", [32, 0, 0, -4, 0]]]}, "/gates/mux2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "120p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.005p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "20p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "27", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"line": "no", "name": "D1"}], ["terminal", [0, 16, 0], {"line": "no", "name": "D0"}], ["terminal", [8, 32, 5], {"name": "S"}], ["line", [4, -8, 0, 0, 32]], ["line", [12, 0, 0, 0, 16]], ["terminal", [16, 8, 4], {"line": "no", "name": "Y"}], ["text", [5, 0, 0], {"text": "1", "font": "4pt sans-serif"}], ["text", [5, 16, 0], {"text": "0", "font": "4pt sans-serif"}], ["line", [4, -8, 0, 8, 8]], ["line", [0, 16, 0, 4, 0]], ["line", [0, 0, 0, 4, 0]], ["line", [12, 8, 0, 4, 0]], ["line", [4, 24, 0, 8, -8]], ["line", [8, 24, 0, 0, -4]], ["property", [12, 20, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/buffer": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "80p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "2200", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.003p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "1200", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "20p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "13", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [32, 0, 4], {"name": "Z"}], ["line", [8, -8, 0, 0, 16]], ["line", [8, 8, 0, 16, -8]], ["line", [24, 0, 0, -16, -8]], ["property", [16, 4, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/nand3": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "50p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4200", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.005p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "3000", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "10p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "13", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 16, 4], {"name": "Z"}], ["arc", [20, 4, 0, 16, 12, 15, 9]], ["arc", [20, 28, 6, 16, 12, 15, 9]], ["line", [8, 4, 0, 12, 0]], ["line", [8, 28, 0, 12, 0]], ["circle", [38, 16, 0, 2]], ["property", [33, 23, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["line", [8, -4, 0, 0, 40]]]}, "/gates/nand2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "30p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.004p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2800", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "10p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "10", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [8, -4, 0, 0, 24]], ["arc", [20, -4, 0, 16, 12, 15, 9]], ["arc", [20, 20, 6, 16, 12, 15, 9]], ["line", [8, -4, 0, 12, 0]], ["line", [8, 20, 0, 12, 0]], ["circle", [38, 8, 0, 2]], ["property", [33, 15, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/dlatchn": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "190p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4300", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "ts": {"edit": "no", "label": "Setup time (s)", "type": "number", "value": "200p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "th": {"edit": "no", "label": "Hold time (s)", "type": "number", "value": "25p", "choices": [""]}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "36", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "D"}], ["terminal", [0, 16, 0], {"line": "no", "name": "GN"}], ["terminal", [40, 0, 4], {"name": "Q"}], ["text", [10, 0, 0], {"text": "D", "font": "4pt sans-serif"}], ["text", [10, 16, 0], {"text": "GN", "font": "4pt sans-serif"}], ["text", [30, 0, 0], {"text": "Q", "align": "center-right", "font": "4pt sans-serif"}], ["line", [8, -8, 0, 24, 0]], ["line", [32, -8, 0, 0, 32]], ["line", [32, 24, 0, -24, 0]], ["line", [8, 24, 0, 0, -32]], ["circle", [6, 16, 0, 2]], ["line", [4, 16, 0, -4, 0]], ["property", [20, -8, 0], {"align": "bottom-center", "format": "{name}"}]]}, "/gates/and2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "120p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2300", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "13", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [8, -4, 0, 0, 24]], ["arc", [20, -4, 0, 16, 12, 15, 9]], ["arc", [20, 20, 6, 16, 12, 15, 9]], ["line", [8, -4, 0, 12, 0]], ["line", [8, 20, 0, 12, 0]], ["property", [33, 15, 0], {"align": "top-left", "format": "{name}"}], ["line", [40, 8, 0, -4, 0]]]}, "/gates/and3": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "150p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2600", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "17", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 16, 4], {"name": "Z"}], ["arc", [20, 4, 0, 16, 12, 15, 9]], ["arc", [20, 28, 6, 16, 12, 15, 9]], ["line", [8, 4, 0, 12, 0]], ["line", [8, 28, 0, 12, 0]], ["property", [33, 23, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["line", [8, -4, 0, 0, 40]], ["line", [40, 16, 0, -4, 0]]]}, "/gates/nand4": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "70p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4400", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.005p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "3500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "10p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "17", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 24, 4], {"name": "Z"}], ["arc", [20, 12, 0, 16, 12, 15, 9]], ["arc", [20, 36, 6, 16, 12, 15, 9]], ["line", [8, 12, 0, 12, 0]], ["line", [8, 36, 0, 12, 0]], ["circle", [38, 24, 0, 2]], ["property", [33, 31, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["terminal", [0, 48, 0], {"name": "D"}], ["line", [8, -4, 0, 0, 57]]]}, "/gates/xor2": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "140p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.006p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "27", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"line": "no", "name": "A"}], ["terminal", [0, 16, 0], {"line": "no", "name": "B"}], ["terminal", [48, 8, 4], {"name": "Z"}], ["line", [8, 20, 0, 8, 0]], ["line", [8, -4, 0, 8, 0]], ["arc", [16, -4, 0, 20, 12, 18, 9]], ["arc", [16, 20, 6, 20, 12, 18, 9]], ["arc", [8, -4, 0, 0, 24, 3, 12]], ["property", [32, 14, 0], {"align": "top-left", "format": "{name}"}], ["arc", [5, -4, 0, 0, 24, 3, 12]], ["line", [0, 0, 0, 7, 0]], ["line", [0, 16, 0, 7, 0]], ["line", [40, 8, 0, -4, 0]]]}, "/gates/dlatch": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "190p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4300", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "ts": {"edit": "no", "label": "Setup time (s)", "type": "number", "value": "200p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "th": {"edit": "no", "label": "Hold time (s)", "type": "number", "value": "25p", "choices": [""]}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2500", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "36", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "D"}], ["terminal", [0, 16, 0], {"name": "G"}], ["terminal", [40, 0, 4], {"name": "Q"}], ["text", [10, 0, 0], {"text": "D", "font": "4pt sans-serif"}], ["text", [10, 16, 0], {"text": "G", "font": "4pt sans-serif"}], ["text", [30, 0, 0], {"text": "Q", "align": "center-right", "font": "4pt sans-serif"}], ["line", [8, -8, 0, 24, 0]], ["line", [32, -8, 0, 0, 32]], ["line", [32, 24, 0, -24, 0]], ["line", [8, 24, 0, 0, -32]], ["property", [20, -8, 0], {"align": "bottom-center", "format": "{name}"}]]}, "/gates/buffer_h": {"properties": {"tpd": {"edit": "no", "choices": [""], "type": "number", "value": "70p", "label": "Propagation delay (s)"}, "name": {"edit": "yes", "choices": [""], "type": "name", "value": "", "label": "Name"}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "choices": [""], "type": "number", "value": "1100", "label": "Output rise time (s/F)"}, "cin": {"edit": "no", "choices": [""], "type": "number", "value": "0.005p", "label": "Input capacitance (F)"}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "choices": [""], "type": "number", "value": "600", "label": "Output fall time (s/F)"}, "tcd": {"edit": "no", "choices": [""], "type": "number", "value": "20p", "label": "Contamination delay (s)"}, "size": {"edit": "no", "choices": [""], "type": "number", "value": "17", "label": "Size (\u03bc\u00b2)"}}, "icon": [["text", [13, 0, 0], {"text": "H", "align": "center", "font": "bold 6pt sans-serif"}], ["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [32, 0, 4], {"name": "Z"}], ["line", [8, -8, 0, 0, 16]], ["line", [8, 8, 0, 16, -8]], ["line", [24, 0, 0, -16, -8]], ["property", [16, 4, 0], {"align": "top-left", "format": "{name}"}]]}, "/gates/and4": {"properties": {"tpd": {"edit": "no", "label": "Propagation delay (s)", "type": "number", "value": "160p", "choices": [""]}, "name": {"edit": "yes", "label": "Name", "type": "name", "value": "", "choices": [""]}, "confidential": {"edit": "no", "type": "string", "value": "true", "label": "Confidential?"}, "tr": {"edit": "no", "label": "Output rise time (s/F)", "type": "number", "value": "4500", "choices": [""]}, "cin": {"edit": "no", "label": "Input capacitance (F)", "type": "number", "value": "0.002p", "choices": [""]}, "readonly": {"edit": "no", "type": "string", "value": "true", "label": "Read only?"}, "tf": {"edit": "no", "label": "Output fall time (s/F)", "type": "number", "value": "2800", "choices": [""]}, "tcd": {"edit": "no", "label": "Contamination delay (s)", "type": "number", "value": "30p", "choices": [""]}, "size": {"edit": "no", "label": "Size (\u03bc\u00b2)", "type": "number", "value": "20", "choices": [""]}}, "icon": [["terminal", [0, 0, 0], {"name": "A"}], ["terminal", [0, 16, 0], {"name": "B"}], ["terminal", [48, 24, 4], {"name": "Z"}], ["arc", [20, 12, 0, 16, 12, 15, 9]], ["arc", [20, 36, 6, 16, 12, 15, 9]], ["line", [8, 12, 0, 12, 0]], ["line", [8, 36, 0, 12, 0]], ["property", [33, 31, 0], {"align": "top-left", "format": "{name}"}], ["terminal", [0, 32, 0], {"name": "C"}], ["terminal", [0, 48, 0], {"name": "D"}], ["line", [8, -4, 0, 0, 57]], ["line", [40, 24, 0, -4, 0]]]}},true);};