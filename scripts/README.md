# ChatGPT 浏览器调研

先在可见 Chrome 中手动登录 ChatGPT，并以 `--remote-debugging-port=9225` 启动。然后在项目根目录执行：

```bash
python3 -m pip install playwright
python3 -m playwright install chromium  # 首次运行时需要
python3 scripts/chatgpt_research.py
```

结果写入 `data/bg3_research.json`。也可以用 `--question "..."` 替换默认的三条问题，或用 `-o` 指定输出文件。
